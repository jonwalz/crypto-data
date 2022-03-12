import { LoaderFunction, useLoaderData } from 'remix'
import {
  CurrencyDetailCard,
  CurrencyDetailCardProps,
} from '~/components/CurrencyDetailCard'
import Layout from '~/components/Layout'
import {
  fetchCurrencyDetails,
  getCurrencyIdFromTicker,
} from '~/server/santiment'

export const loader: LoaderFunction = async ({ params }) => {
  // use params to fetch currency detail
  const currency = params.currency

  const currencyId = await getCurrencyIdFromTicker(currency)
  const detailsData = await fetchCurrencyDetails(currencyId)

  return detailsData
}

export default () => {
  const currencyDetails = useLoaderData<CurrencyDetailCardProps>()

  return (
    <Layout>
      <CurrencyDetailCard {...currencyDetails} />
    </Layout>
  )
}
