import { createClient, Provider, useQuery } from "urql";
import { useState } from "react";
import Crypto from "./Crypto/Crypto";
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
  const [searchValue, setSearchValue] = useState("");

  const { data, fetching, error } = result;

  // 'fetching' is a common pattern indicating a loading state
  if (fetching) return <div>Loading...</div>;

  if (error) return <div>Whoops, something bad happened...</div>;

  // Check the console to see data shape
  // console.log("DATA: ", data.allCurrencyProjects);
  const crypto = data.allCurrencyProjects.map((currency, i) => {
    return (
      <Crypto
        key={`${currency.name} ${i}`}
        priceUsd={currency.priceUsd}
        i={i}
        name={currency.name}
      />
    );
  });
  let handleChange = (e) => {
    setSearchValue((prevValue) => e.target.value);
  };
  let filteredCrypto = crypto.filter((value) => {
    let { name } = value.props;
    if (searchValue !== "") {
      return name.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return true;
    }
  });
  return (
    <>
      <input type="text" placeholder="SEARCH" onChange={handleChange} />
      <ul>{filteredCrypto}</ul>
    </>
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
