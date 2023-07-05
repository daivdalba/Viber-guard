import { CheckIcon, WarningTwoIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import posthog from 'posthog-js';
import { toUnicode } from 'punycode';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { TwitterShareButton } from 'react-share';
import { BrowserMessageType, ProceedAnywayMessageType } from '../lib/helpers/chrome/messageHandler';
import { openDashboard } from '../lib/helpers/linkHelper';
import { standardizeUrl } from '../lib/helpers/util';
import theme from '../lib/theme';
import { PHISHING_REASON } from '../models/Alert';
import { WarningType } from '../models/PhishingResponse';
import styles from '../styles.module.css';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import '../index.css'
import Header from '../components/app-dashboard/Header';
import SimulationWarning from '../components/simulation/SimulationWarning';

export function PhishingWarning() {
  const [isFalsePositive, setIsFalsePositive] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const safeUrl = queryParams.get('safe') || 'null';
  const proceedAnywayUrl = queryParams.get('proceed') || 'null';
  const reason: PHISHING_REASON | string = queryParams.get('reason') || 'null';
  const mappedSafeUrl = safeUrl ? `https://${safeUrl}` : 'null';
  const isConfirmedPhishing = reason === WarningType.Blocklisted;
  const logoSrc = 'images/wg_logos/Logo-phishing-protection.png';
  const warningText = getWarningText();

  useEffect(() => {
    posthog.init('phc_rb7Dd9nqkBMJYCCh7MQWpXtkNqIGUFdCZbUThgipNQD', {
      api_host: 'https://app.posthog.com',
      persistence: 'localStorage',
      autocapture: false,
      capture_pageleave: false,
    });

    Sentry.init({
      dsn: 'https://d6ac9c557b4c4eee8b1d4224528f52b3@o4504402373640192.ingest.sentry.io/4504402378293248',
      integrations: [new BrowserTracing()],
    });
    posthog.capture('show phishing screen', { phishingWebsite: proceedAnywayUrl, reason });
  }, []);

  function openSafeLink() {
    posthog.capture('open safe link', { mappedSafeUrl });
    chrome.tabs.update({ url: mappedSafeUrl });
  }

  function handleFalsePositiveCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked;
    posthog.capture('permanently unblock url', { falsePositiveUrl: proceedAnywayUrl });
    setIsFalsePositive(value);
  }

  function openProceedAnyway() {
    posthog.capture('proceed anyway', { proceedAnywayUrl, reason });
    chrome.runtime.sendMessage({
      type: BrowserMessageType.ProceedAnyway,
      url: proceedAnywayUrl,
      permanent: true,
    } as ProceedAnywayMessageType);
  }

  function getLabel(): React.ReactNode {
    return (
      <span>
        <span>The url you clicked on is </span>
        <strong>{toUnicode(standardizeUrl(proceedAnywayUrl))}.</strong>
        <span> We've identified punycode characters, which is a common form of phishing attack</span>
      </span>
    );
  }

  console.log({
    isConfirmedPhishing: isConfirmedPhishing,
    proceedAnywayUrl: proceedAnywayUrl,
    reason: reason,
    WarningTypeDrainer: WarningType.Drainer,
    WarningTypeRecentlyCreated: WarningType.RecentlyCreated,
    WarningTypeHomoglyph: WarningType.Homoglyph,
    queryParams: queryParams,
    safeUrl: safeUrl,
    WarningTypeMalware: WarningType.Malware,
  })

  function getWarningText() {
    if (isConfirmedPhishing) {
      return (
        <>
          <Text variant={'muted'} fontSize={'lg'}>
            The website ({proceedAnywayUrl}) you're trying to visit is on our{' '}
            <strong>confirmed phishing blocklist</strong>
          </Text>
        </>
      );
    } else if (reason === WarningType.Drainer) {
      return (
        <>
          <Text variant={'muted'} fontSize={'lg'}>
            The website ({proceedAnywayUrl}) you're trying to visit is a <strong>suspected wallet drainer.</strong>
          </Text>
        </>
      );
    } else if (reason === WarningType.Homoglyph) {
      return (
        <>
          <Text style={{ whiteSpace: 'nowrap' }} variant={'muted'} fontSize={'lg'}>
            The website{' '}
            <strong>
              <Tooltip placement="top" label={getLabel()} variant={'default'}>
                <div style={{ display: 'inline-block' }} className={styles.hover}>
                  ({proceedAnywayUrl} <BsQuestionCircleFill size={'14'} color="white" style={{ display: 'inline' }} />)
                </div>
              </Tooltip>{' '}
            </strong>
            you're trying to visit might be phishing attempt.
          </Text>

          <Text variant={'muted'} fontSize={'lg'}>
            We think you might be looking for <strong>{safeUrl}</strong>
          </Text>
        </>
      );
    } else if (reason === WarningType.Malware) {
      return (
        <Text variant={'muted'} fontSize={'lg'}>
          The website ({proceedAnywayUrl}) you're trying to visit{' '}
          <strong>contains malware, phishing, or unwanted software.</strong>
        </Text>
      );
    } else if (!isConfirmedPhishing && safeUrl !== 'null') {
      return (
        <>
          <Text variant={'muted'} fontSize={'lg'}>
            The website ({proceedAnywayUrl}) you're trying to visit might be a phishing attempt.
          </Text>
          <Text variant={'muted'} fontSize={'lg'}>
            We think you might be looking for <strong>{safeUrl}</strong>
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Text variant={'muted'} fontSize={'lg'}>
            The website ({proceedAnywayUrl}) you're trying to visit might be a phishing attempt.
          </Text>
        </>
      );
    }
  }

  return (
    <div className='container'>
      <Header isPhish={false}/>
      {/* <SimulationWarning /> */}
      <div className={styles.center}>
        <VStack spacing={'4'} alignItems="flex-start">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100" 
            height="100" 
            viewBox="0 0 100 100" 
            fill="none" 
            color={reason === WarningType.RecentlyCreated ? 'yellow.400' : 'red.400'}
            className='mr-3'
          >
              <g id="triangle-warning-2 1" clipPath="url(#clip0_24_160)">
              <path id="Vector" d="M56.25 43.75V64.5833C56.25 68.0416 53.4583 70.8333 50 70.8333C46.5417 70.8333 43.75 68.0416 43.75 64.5833V43.75C43.75 40.2916 46.5417 37.5 50 37.5C53.4583 37.5 56.25 40.2916 56.25 43.75ZM50 79.1666C46.5417 79.1666 43.75 81.9583 43.75 85.4166C43.75 88.875 46.5417 91.6666 50 91.6666C53.4583 91.6666 56.25 88.875 56.25 85.4166C56.25 81.9583 53.4583 79.1666 50 79.1666ZM96.0417 61.7083L63.7917 11.375C60.6667 6.87496 55.5 4.16663 50 4.16663C44.5 4.16663 39.3333 6.87496 36.0833 11.5833L4.12499 61.5C-0.416673 68 -1.25001 75.875 1.95833 82C5.16666 88.1666 11.7083 91.6666 19.9583 91.6666H27.125C30.5833 91.6666 33.375 88.875 33.375 85.4166C33.375 81.9583 30.5833 79.1666 27.125 79.1666H19.9583C17.9583 79.1666 14.4167 78.7916 13.0417 76.2083C12 74.2083 12.5 71.3333 14.5 68.4166L46.4583 18.5C47.625 16.8333 49.3333 16.6666 50 16.6666C50.6667 16.6666 52.375 16.8333 53.4167 18.2916L85.6667 68.625C87.5417 71.2916 88.0417 74.2083 87 76.2083C85.6667 78.7916 82.0833 79.1666 80.0833 79.1666H72.9167C69.4583 79.1666 66.6667 81.9583 66.6667 85.4166C66.6667 88.875 69.4583 91.6666 72.9167 91.6666H80.0833C88.2917 91.6666 94.875 88.125 98.0833 82C101.292 75.875 100.458 68 96.0833 61.7083H96.0417Z" fill="#F07054"/>
              </g>
              <defs>
              <clipPath id="clip0_24_160">
              <rect width="100" height="100" fill="white"/>
              </clipPath>
              </defs>
          </svg>
          <Heading as="h4">This website might be harmful</Heading>
          {warningText}

          <Stack pt="80px" direction="row" spacing="6">
            <Button variant="link" className='vibra-btn btn-reject flex items-center justify-center' onClick={openProceedAnyway}>
              Proceed Anyway
            </Button>
            {safeUrl !== 'null' && (
              <Button onClick={openSafeLink} className='connect-btn' variant="primary" rightIcon={<CheckIcon />}>
                <Link>Go to {safeUrl}</Link>
              </Button>
            )}
          </Stack>
          <Tooltip
            variant={'default'}
            label="Disclaimer: We are still in BETA and expect false positives to
              happen. If you believe this website is safe, let us know by
              checking this box."
            placement="bottom-end"
          >
            <Box>
              <Checkbox colorScheme="green" onChange={handleFalsePositiveCheckbox} pt="10px">
                Click here to let us know if this is a false positive
              </Checkbox>
            </Box>
          </Tooltip>
          <div className='flex items-center mt-20'>
            <img src='/images/asset_logos/logo.png' className='inline-block' alt='logo' />
            <div className='inline-block'>
                <div className='title'>VIBRANIUM SHIELD A.I</div>
                <div className='protection'>Phishing Protection</div>
            </div>
          </div>
        </VStack>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PhishingWarning />
    </ChakraProvider>
  </React.StrictMode>
);
