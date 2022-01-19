import React from 'react'
import Main from '../Main'
import { Navbar } from '../Navbar'
import { LayoutWrapper } from './styles'

interface LayoutProps {
  path: String
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Main />
    </LayoutWrapper>
  )
}

export default Layout
