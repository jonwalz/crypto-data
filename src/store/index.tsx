import create, { GetState, SetState } from 'zustand'
import { currenciesSlice, CURRENCIES_SLICE } from './slices/currenciesSlice'
import { searchInputSlice, SEARCH_INPUT_SLICE } from './slices/searchInput'
import { watchlistSlice, WATCHLIST_SLICE } from './slices/watchlistSlice'

// Followed the example here: https://github.com/pmndrs/zustand/issues/508#issuecomment-955722581

export type STORE_STATE = CURRENCIES_SLICE &
  WATCHLIST_SLICE &
  SEARCH_INPUT_SLICE

export type STORE_SLICE<T> = (
  set: SetState<STORE_STATE>,
  get: GetState<STORE_STATE>,
) => T

export const useStore = create<STORE_STATE>((set, get) => ({
  ...currenciesSlice(set, get),
  ...watchlistSlice(set, get),
  ...searchInputSlice(set, get),
}))
