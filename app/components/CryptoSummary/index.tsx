import { Box } from "@chakra-ui/react";
import { CryptoSummaryProps } from "./types";

export const CryptoSummary: React.FC<CryptoSummaryProps> = ({ item }) => {
  const { id, name, ticker } = item.item;

  return (
    <Box key={id} m={2} display="flex">
      <Box fontSize="l">{name}</Box>
      <Box fontSize="sm" color="gray.500">
        {ticker}
      </Box>
    </Box>
  );
};
