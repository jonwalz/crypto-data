import { STORE_SLICE } from '..'

export interface WATCHLIST_SLICE {
  watchlist: string[]
  addToWatchlist: (id: string) => void
  removeFromWatchlist: (id: string) => void
}

export const watchlistSlice: STORE_SLICE<WATCHLIST_SLICE> = (set, get) => ({
  watchlist: [],
  addToWatchlist: (id) => {
    // TODO: Once we add a database, this will become a POST
    set((state) => ({ ...state, watchlist: [...state.watchlist, id] }))
  },
  removeFromWatchlist: (id) => {
    set((state) => {
      const removed = [...state.watchlist].filter((oldId) => oldId === id)
      return { ...state, watchlist: removed }
    })
  },
})
