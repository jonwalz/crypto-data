export interface CryptoItem {
  refIndex: string;
  item: {
    id: string;
    name: string;
    marketcapUsd?: string;
    priceUsd?: string;
    symbol?: string;
    ticker?: string;
    volumeChange24h?: string;
  };
}

export interface CryptoSummaryProps {
  item: CryptoItem;
}
