import { search } from 'fast-fuzzy'
import { STORE_SLICE } from '..'
import { fetchCurrencies } from '../../client'

export interface CURRENCY {
  id: string
  marketcapUsd: number
  name: string
  priceUsd: number
  symbol: string
  ticker: string
  volumeChange24h: null | string
}

export interface CURRENCIES_SLICE {
  currencies: CURRENCY[]
  fetchCurrencies: Function
  filteredCurrencies: () => CURRENCY[]
}

export const currenciesSlice: STORE_SLICE<CURRENCIES_SLICE> = (set, get) => ({
  currencies: [],
  setCurrencies: (newCurrencies) =>
    set((state) => ({ currencies: newCurrencies })),
  fetchCurrencies: async () => {
    const data = await fetchCurrencies()

    set((state) => ({ ...state, currencies: data.data.allProjects }))
  },
  filteredCurrencies: () => {
    const currencies = get().currencies
    const searchInput = get().value
    const filteredCurrencies = search(searchInput, currencies, {
      keySelector: (obj) => obj.name,
    })

    return filteredCurrencies
  },
})
