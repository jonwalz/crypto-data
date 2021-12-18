import { useQuery } from "urql";
import { useState } from "react";
import { Crypto } from "../Crypto";
import { Input } from "./styles";

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

export function Currencies() {
  // useQuery will make a POST request with CURRENCIES_EXAMPLE as the body
  const [result] = useQuery({ query: CURRENCIES_EXAMPLE });
  const [searchValue, setSearchValue] = useState("");

  const { data, fetching, error } = result;

  // 'fetching' is a common pattern indicating a loading state
  if (fetching) return <div>Loading...</div>;

  if (error) return <div>Whoops, something bad happened...</div>;

  // Check the console to see data shape
  console.log("DATA: ", data.allCurrencyProjects);
  const crypto = data.allCurrencyProjects.map((currency, i) => {
    return (
      <Crypto
        key={`${currency.name} ${i}`}
        priceUsd={currency.priceUsd}
        i={i}
        name={currency.name}
        symbol={currency.symbol}
      />
    );
  });

  const handleChange = (e) => {
    setSearchValue((prevValue) => e.target.value);
  };

  const filteredSearchCrypto = crypto.filter(({ props }) =>
    searchValue !== ""
      ? props.name.toLowerCase().includes(searchValue.toLowerCase())
      : true
  );

  return (
    <>
      <Input type="text" placeholder="SEARCH" onChange={handleChange} />

      <br />
      <br />
      <ul>{filteredSearchCrypto}</ul>
    </>
  );
}
