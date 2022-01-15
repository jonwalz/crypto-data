import React from 'react'
import { useStore } from '../../store'
import { WatchlistWrapper } from './styles'

interface WatchlistProps {}

const Watchlist: React.FC<WatchlistProps> = () => {
  const watchlist = useStore((state) => state.watchlist)
  return (
    <WatchlistWrapper>
      Watchlist:{' '}
      <ul>
        {watchlist.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </WatchlistWrapper>
  )
}

export default Watchlist
