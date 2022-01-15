import { createClient, Provider } from 'urql'
import { globalCss } from './stitches.config'
import 'normalize.css'

import './App.css'
import { Navbar } from './components/Navbar'
import Main from './components/Main'
import { useStore } from './store'
import { useEffect } from 'react'

export const santimentClient = createClient({
  url: 'https://api.santiment.net/graphql',
})

const globalStyles = globalCss({
  body: {
    margin: 0,
    background: '$blue700',
    color: '$blue500',
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
  },
  code: {
    fontFamily: `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace`,
  },
})

function App() {
  globalStyles()

  // fetch currencies on mount
  const fetchCurrencies = useStore((state) => state.fetchCurrencies)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchCurrencies(), [])

  return (
    <Provider value={santimentClient}>
      <Navbar />
      <Main />
    </Provider>
  )
}

export default App
