import React from 'react'
import SearchResults from '../SearchResults'
import Watchlist from '../Watchlist'
import { MainWrapper } from './styles'

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <MainWrapper>
      <Watchlist />
      <SearchResults />
    </MainWrapper>
  )
}

export default Main
