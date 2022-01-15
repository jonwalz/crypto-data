import { render, screen } from '@testing-library/react'
import { CryptoCard } from './'

const props = {
  name: 'Test name',
  i: 0,
  priceUsd: '123',
  symbol: '',
}
describe('Crypto component', () => {
  it('Should render correctly', () => {
    render(<CryptoCard {...props} />)

    screen.getByText(/Test name/i) // '/Name: test/i' is regex for incomplete match
    screen.getByText(/123/i)
  })
})
