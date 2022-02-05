export const CURRENCY_DETAILS_QUERY = `
  query getProject($currencyId: ID!) {
    project(id: $currencyId) {
      slug
      name
      ticker
      priceUsd
    }
  }
`;

export const ALL_CURRENCIES_QUERY = `
  query {
    allProjects {
      symbol
      ticker
      name
      priceUsd
      volumeChange24h
      marketcapUsd
      id
    }
  }
`;
