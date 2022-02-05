import React from "react";
import { CryptoCard } from "../CryptoCard";
import { SearchResultsWrapper } from "./styles";

interface SearchResultsProps {}

const SearchResults: React.FC<SearchResultsProps> = () => {
  const filteredCurrencies = [];
  const addToWatchist = (id: string) => null;
  const removeFromWatchList = (id: string) => null;

  return (
    <SearchResultsWrapper>
      <h3>Results: </h3>
      {filteredCurrencies.map((currency, i) => {
        return (
          <CryptoCard
            key={i}
            priceUsd={currency.priceUsd}
            volumeChange24h={currency.volumeChange24h}
            marketcapUsd={currency.marketcapUsd}
            i={i}
            name={currency.name}
            symbol={currency.symbol}
            addToWatchList={() => addToWatchist(currency.id)}
            removeFromWatchList={() => removeFromWatchList(currency.id)}
          />
        );
      })}
    </SearchResultsWrapper>
  );
};

export default SearchResults;
