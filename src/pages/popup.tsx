import posthog from 'posthog-js';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfirmSimulationButton } from '../components/simulation/ConfirmSimulationButton';
import { ContractDetails } from '../components/simulation/ContractDetails';
import { NoSimulation } from '../components/simulation/NoSimulation';
import { SimulationHeader } from '../components/simulation/SimulationHeader';
import { SimulationOverview } from '../components/simulation/SimulationOverview';
import { TransactionContent } from '../components/simulation/TransactionContent';
import type { StoredSimulation } from '../lib/simulation/storage';
import { StoredSimulationState } from '../lib/simulation/storage';
import '../index.css'
import { ErrorType, SimulationMethodType, SimulationWarningType } from '../models/simulation/Transaction';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { ErrorComponent } from '../components/simulation/Error';
import { BypassedSimulationButton } from '../components/simulation/SimulationSubComponents/BypassButton';
import { SimulationSurvey } from '../components/simulation/SimulationSurvey';
import { WgKeys } from '../lib/helpers/chrome/localStorageKeys';
import { PersonalSign } from '../components/simulation/PersonalSign';
import localStorageHelpers from '../lib/helpers/chrome/localStorage';
import SimulationPopup from '../components/simulation/SimulationPopup';

const Popup = () => {
  const [currentSimulation, setCurrentSimulation] = useState<StoredSimulation>();
  const [showSurvey, setShowSurvey] = useState(false);
  const [loading, isLoading] = useState(true);

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

  function updateSimulations(simulations: StoredSimulation[]) {
    const filteredSimulations = simulations?.filter(
      (simulation: StoredSimulation) =>
        simulation.state !== StoredSimulationState.Rejected && simulation.state !== StoredSimulationState.Confirmed
    );

    let current;

    if (filteredSimulations && filteredSimulations[0]) {
      current = filteredSimulations[0];
      setCurrentSimulation(current);
    } else {
      setCurrentSimulation(undefined);
    }

    if (current?.args?.bypassed) {
      if (current.simulation) {
        current.simulation.warningType = SimulationWarningType.Warn;
        current.simulation.message = [
          `This transaction attempted to bypass Vibranium Shield's simulation. Please proceed with caution.`,
          ...(current.simulation.message || ''),
        ];
        setCurrentSimulation(current);
      }
    }

    isLoading(false);
  }

  useEffect(() => {
    isLoading(true);
    chrome.storage.local
      .get('simulations')
      .then(({ simulations }) => updateSimulations(simulations))
      .catch((err) => {
        isLoading(false);
        console.log('unable to fetch simulations from popup', err);
      });

    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === 'local' && changes['simulations']?.newValue) {
        const newSimulations = changes['simulations']?.newValue;
        updateSimulations(newSimulations);
      }
    });

    // Show the survey if the feature flag is enabled and the user hasn't completed it yet
    const surveyFlag = posthog.isFeatureEnabled('show-user-survey');
    if (surveyFlag) {
      localStorageHelpers.get<boolean>(WgKeys.SurveyComplete).then((surveyComplete) => {
        if (!surveyComplete) {
          setShowSurvey(true);
        }
      });
    }
  }, []);

  if (loading) {
    return <div style={{ backgroundColor: 'black' }} />;
  }
  return (
    <SimulationPopup />
  );

};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
