import { WATCHLIST_ITEM } from '../store/slices/watchlistSlice'

export type CURRENCIES_RESPONSE = {
  data: any
}

export type CURRENCY_DETAIL_RESPONSE = {
  data: {
    data: {
      project: WATCHLIST_ITEM
    }
  }
}
