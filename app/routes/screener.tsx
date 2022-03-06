import {
  Box,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
} from '@chakra-ui/react'
import { Form, json, useActionData, useSubmit, useTransition } from 'remix'
import { nomicsFetchCurrencies } from '~/server/nomics/nomics'
import { santimentFetchCurrencies } from '~/server/santiment'
import { CryptoSummary } from '~/components/CryptoSummary'
import { CryptoItem } from '~/components/CryptoSummary/types'
import { searchData } from './utils'
import Layout from '~/components/Layout'

export async function action({ request }) {
  const result = await request.formData()
  const searchString = result.get('crypto-search')
  const dataSourceSelection = result.get('data-source')

  if (!searchString) return null

  const dataSource = {
    santiment: santimentFetchCurrencies,
    nomics: nomicsFetchCurrencies,
  }[dataSourceSelection]

  const data = await dataSource()

  return json(searchData(searchString, data))
}

// https://remix.run/docs/en/v1/api/remix#usesubmit
export default () => {
  const submit = useSubmit()
  const data = useActionData()
  const transition = useTransition()

  const handleChange = (event) => {
    submit(event.currentTarget, { replace: true })
  }

  return (
    <Layout>
      <Flex flexDir="column" px="3">
        <Form method="post" onChange={handleChange}>
          <RadioGroup name="data-source" defaultValue="santiment" mb="2" py="2">
            <Stack direction="row">
              <Radio value="santiment">Santiment</Radio>
              <Radio value="nomics">Nomics</Radio>
            </Stack>
          </RadioGroup>
          <Input
            name="crypto-search"
            type="text"
            placeholder="SEARCH"
            color="white"
            autoComplete="off"
          />
        </Form>
        <Box mt="2">
          {['loading', 'submitting'].includes(transition.state) ? (
            <Spinner size="lg" />
          ) : (
            data &&
            data.map((item: CryptoItem) => (
              <CryptoSummary item={item} key={item.refIndex} />
            ))
          )}
        </Box>
      </Flex>
    </Layout>
  )
}
