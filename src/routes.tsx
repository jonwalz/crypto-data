import React from 'react'
import Login from './pages/Login'
import Layout from './components/Layout'
import { Router } from '@reach/router'

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Router>
      <Login path="/" />
      <Layout path="/main" />
    </Router>
  )
}

export default Routes
