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
`
