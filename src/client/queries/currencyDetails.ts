export const CURRENCY_DETAILS_QUERY = `
  query getProject($currencyId: ID!) {
    project(id: $currencyId) {
      slug
      name
      ticker
      priceUsd
    }
  }
`
