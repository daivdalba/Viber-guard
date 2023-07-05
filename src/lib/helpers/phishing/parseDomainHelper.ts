import { parseDomain, ParseResultType } from 'parse-domain';
import { PhishingResponse } from '../../../models/PhishingResponse';
import { createDomainName, standardizeUrl } from '../util';

export function getDomainNameFromURL(url: string): string {
  const domainObj = parseDomain(standardizeUrl(url));
  if (domainObj.type !== ParseResultType.Listed) return url;

  return createDomainName(domainObj);
}

export function domainHasChanged(
  url: string,
  currentSite: PhishingResponse
): boolean {
  const domainObj = parseDomain(standardizeUrl(url));
  console.log('step 3-1', domainObj)
  console.log('step 3-2', domainObj.type !== ParseResultType.Listed)
  if (domainObj.type !== ParseResultType.Listed) return true;

  const domainName = createDomainName(domainObj);
  console.log('step 3-3', domainName, currentSite.domainName)

  return domainName !== currentSite.domainName;
}
