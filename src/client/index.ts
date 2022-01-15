import axios from 'axios'
import { ALL_CURRENCIES } from './queries'

const ENDPOINT = 'https://api.santiment.net/graphql'
const headers = {
  'content-type': 'application/json',
}

const client = axios.create({
  baseURL: ENDPOINT,
  headers,
})

type RESPONSE = {
  data: any
}

export async function fetchCurrencies() {
  const graphqlQuery = {
    query: ALL_CURRENCIES,
  }

  try {
    const response: RESPONSE = await client({
      method: 'post',
      data: graphqlQuery,
    })

    return response.data
  } catch (e) {
    new Error(e)
    return []
  }
}
