import { useQuery } from "urql";
import { useState } from "react";
import { Crypto } from "../Crypto";
import { Input, Box } from "./styles";

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
  const [watchListItems, setWatchListItems] = useState([]);

  const { data, fetching, error } = result;

  // 'fetching' is a common pattern indicating a loading state
  if (fetching) return <div>Loading...</div>;

  if (error) return <div>Whoops, something bad happened...</div>;

  const addToWatchList = (coin) => {
    setWatchListItems((prevItem) => [
      ...prevItem,
      { name: coin.name, price: coin.priceUsd },
    ]);
  };

  const removeFromWatchList = (name: string) => {
    setWatchListItems((prevItems) =>
      prevItems.filter((item) => item.name !== name)
    );
  };

  const crypto = data.allCurrencyProjects.map((currency, i) => {
    return (
      <Crypto
        key={`${i}`}
        priceUsd={currency.priceUsd}
        volumeChange24h={currency.volumeChange24h}
        marketcapUsd={currency.marketcapUsd}
        i={i}
        name={currency.name}
        symbol={currency.symbol}
        addToWatchList={() => addToWatchList(currency)}
        removeFromWatchList={() => removeFromWatchList(currency.name)}
      />
    );
  });

  const watchListDisplay = watchListItems.map((item: any) => {
    return (
      <li key={item.id}>
        <p>{`Name: ${item.name}`} </p>
        <p>{`Price: ${item.price}`}</p>
      </li>
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
      <Box>
        <ul>{filteredSearchCrypto}</ul>
        <ul>{watchListDisplay}</ul>
      </Box>
    </>
  );
}
