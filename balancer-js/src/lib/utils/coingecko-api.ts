export function getCoingeckoApiBaseUrl(isDemoApi = true): string {
  if (isDemoApi) {
    return 'https://coingecko.polarisfinance.io/';
  }
  return 'https://pro-api.coingecko.com/api/v3/';
}

export function getCoingeckoApiKeyHeaderName(isDemoApi = true): string {
  if (isDemoApi) {
    return 'x-cg-demo-api-key';
  }
  return 'x-cg-pro-api-key';
}
