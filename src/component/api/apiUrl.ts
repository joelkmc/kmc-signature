export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'https://erp-kmc.azurewebsites.net/api/'
    : 'https://erp-api.kmc.solutions/api/'
