import { STORE_SLICE } from '..'
import { fetchCurrencyDetails } from '../../client'

export interface WATCHLIST_ITEM {
  name: string
  priceUsd: number
  slug: string
  ticker: string
}

export interface WATCHLIST_SLICE {
  watchlist: Record<string, WATCHLIST_ITEM>
  addToWatchlist: (id: string) => void
  removeFromWatchlist: (id: string) => void
}

export const watchlistSlice: STORE_SLICE<WATCHLIST_SLICE> = (set, get) => ({
  watchlist: {},
  addToWatchlist: async (id) => {
    const currencyDetails = await fetchCurrencyDetails(id)
    // TODO: Once we add a database, this will become a POST
    set((state) => ({
      ...state,
      watchlist: { ...state.watchlist, [id]: currencyDetails },
    }))
  },
  removeFromWatchlist: (id) => {
    set((state) => {
      const newWatchlist = { ...state.watchlist }
      delete newWatchlist[id]

      return { ...state, watchlist: newWatchlist }
    })
  },
})
