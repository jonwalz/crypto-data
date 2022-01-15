export const ALL_CURRENCIES = `
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
