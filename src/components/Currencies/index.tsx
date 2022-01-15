import { useEffect } from 'react'
import { Box } from './styles'
import { useStore } from '../../store'

export function Currencies() {
  // fetch currencies on mount
  const fetchCurrencies = useStore((state) => state.fetchCurrencies)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchCurrencies(), [])

  const currencies = useStore((state) => state.currencies)
  const watchlistItems = useStore((state) => state.watchlist)

  const watchListDisplay = watchlistItems.map((id: string) => {
    const item = currencies.find((currency) => currency.id === id)
    return (
      <li key={item.id}>
        <p>{`Name: ${item.name}`} </p>
        <p>{`Price: ${item.priceUsd}`}</p>
      </li>
    )
  })

  return (
    <>
      <Box>
        <ul>{watchListDisplay}</ul>
      </Box>
    </>
  )
}
