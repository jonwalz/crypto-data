import { Box } from "@chakra-ui/react";
import { Link } from "remix";
import { CryptoSummaryProps } from "./types";

export const CryptoSummary: React.FC<CryptoSummaryProps> = ({ item }) => {
  const {
    item: { id, name, ticker },
  } = item;

  return (
    <Link to={`/details/${ticker}`}>
      <Box
        p={2}
        borderRadius="md"
        display="flex"
        alignItems="flex-end"
        cursor="pointer"
        _hover={{
          bg: "brand.800",
          color: "white",
        }}
      >
        <Box fontSize="l" pr="2">
          {name}
        </Box>
        <Box fontSize="sm" color="gray.500">
          {ticker}
        </Box>
      </Box>
    </Link>
  );
};
