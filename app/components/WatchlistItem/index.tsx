import React from "react";
import { Container, H4 } from "./styles";

interface WatchlistItemProps {
  watchlistItem: any;
}

const WatchlistItem: React.FC<WatchlistItemProps> = ({ watchlistItem }) => {
  if (!watchlistItem) return null;

  return (
    <Container>
      <H4>{watchlistItem.name}</H4>
      <span>{watchlistItem.ticker}</span>
    </Container>
  );
};

export default WatchlistItem;
