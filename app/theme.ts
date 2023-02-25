import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#000000",
    100: "#030303",
    200: "#161616",
    300: "#2e2e2e",
    400: "#484848",
    500: "#636363",
    600: "#808080",
    700: "#9e9e9e",
    800: "#bebebe",
    900: "#dedede",
  },
};

const global = {
  body: {
    color: "brand.900",
  },
};

const styles = {
  global,
};

export const theme = extendTheme({ colors, styles });
