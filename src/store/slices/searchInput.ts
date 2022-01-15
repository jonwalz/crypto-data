import { STORE_SLICE } from '..'

export interface SEARCH_INPUT_SLICE {
  value: string
  setValue: Function
}

export const searchInputSlice: STORE_SLICE<SEARCH_INPUT_SLICE> = (
  set,
  get,
) => ({
  value: '',
  setValue: (input) => {
    set((state) => ({ ...state, value: input }))
  },
})
