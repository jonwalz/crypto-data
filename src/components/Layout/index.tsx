import React from 'react'
import Main from '../Main'
import { LayoutWrapper } from './styles'

interface LayoutProps {
  path: String
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <LayoutWrapper>
      <Main />
    </LayoutWrapper>
  )
}

export default Layout
