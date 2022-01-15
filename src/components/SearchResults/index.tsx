import React from 'react'
import { useStore } from '../../store'
import { CryptoCard } from '../Crypto'
import { SearchResultsWrapper } from './styles'

interface SearchResultsProps {}

const SearchResults: React.FC<SearchResultsProps> = () => {
  const filteredCurrencies = useStore((state) => state.filteredCurrencies())
  const addToWatchist = useStore((state) => state.addToWatchlist)
  const removeFromWatchList = useStore((state) => state.removeFromWatchlist)

  return (
    <SearchResultsWrapper>
      Results:
      {filteredCurrencies.map((currency, i) => {
        return (
          <CryptoCard
            key={i}
            priceUsd={currency.priceUsd}
            volumeChange24h={currency.volumeChange24h}
            marketcapUsd={currency.marketcapUsd}
            i={i}
            name={currency.name}
            symbol={currency.symbol}
            addToWatchList={() => addToWatchist(currency.id)}
            removeFromWatchList={() => removeFromWatchList(currency.id)}
          />
        )
      })}
    </SearchResultsWrapper>
  )
}

export default SearchResults
