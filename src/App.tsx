import { createClient, Provider, useQuery } from "urql";
import "./App.css";

const CURRENCIES_EXAMPLE = `
  query {
    allCurrencyProjects(page: 1) {
      symbol
      ticker
      name
      priceUsd
      volumeChange24h
      marketcapUsd
    }
  }
`;

const client = createClient({
  url: "https://api.santiment.net/graphql",
});

function Currencies() {
  // useQuery will make a POST request with CURRENCIES_EXAMPLE as the body
  const [result] = useQuery({ query: CURRENCIES_EXAMPLE });

  const { data, fetching, error } = result;

  // 'fetching' is a common pattern indicating a loading state
  if (fetching) return <div>Loading...</div>;

  if (error) return <div>Whoops, something bad happened...</div>;

  // Check the console to see data shape
  console.log("DATA: ", data.allCurrencyProjects);

  return (
    <ul>
      {data.allCurrencyProjects.map((currency, i) => {
        return (
          <li key={`${currency.name}+${i}`}>
            <div>Name: {currency.name}</div>
            <div>Currency price: {currency.priceUsd}</div>
          </li>
        );
      })}
    </ul>
  );
}

function App() {
  return (
    <Provider value={client}>
      <Currencies />
    </Provider>
  );
}

export default App;
