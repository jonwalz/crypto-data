import React from 'react'
import { useStore } from '../../store'
import WatchlistItem from '../WatchlistItem'
import { WatchlistWrapper } from './styles'

interface WatchlistProps {}

const Watchlist: React.FC<WatchlistProps> = () => {
  const watchlist = useStore((state) => state.watchlist)

  return (
    <WatchlistWrapper>
      <h3>Watchlist: </h3>
      <div>
        {Object.keys(watchlist).map((currencyId, i) => (
          <WatchlistItem key={i} watchlistItem={watchlist[currencyId]} />
        ))}
      </div>
    </WatchlistWrapper>
  )
}

export default Watchlist
