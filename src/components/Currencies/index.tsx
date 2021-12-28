import { useQuery } from "urql";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log("ITEMS NOW: ", watchListItems);
  }, [watchListItems]);

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
        addToWatchList={() => {
          setWatchListItems((prevItem) => [
            ...prevItem,
            { name: currency.name, price: currency.priceUsd },
          ]);
          console.log("watch list", watchListItems);
        }}
        removeFromWatchList={(name: string) => {
          setWatchListItems((prevItems) =>
            prevItems.filter((item) => item.name !== name)
          );
        }}
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
