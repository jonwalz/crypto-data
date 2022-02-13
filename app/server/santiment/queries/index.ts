export const CURRENCY_DETAILS_QUERY = `
  query getProject($currencyId: ID!) {
    project(id: $currencyId) {
      slug
      name
      ticker
      priceUsd
      longDescription
      logoUrl
      description
      id
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

export const GET_CURRENCY_ID_BY_TICKER = `
  query getByTicker($currencyTicker: String!) {
    allProjectsByTicker(ticker: $currencyTicker) {
      id
    }
  }
`;
