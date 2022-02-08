import { extendTheme } from "@chakra-ui/react";

const colors = {
  green: {
    50: "#e1fafc",
    100: "#c2e9ec",
    200: "#a1d8dc",
    300: "#7ec9cd",
    400: "#5cb9be",
    500: "#44a0a6",
    600: "#327c81",
    700: "#21595c",
    800: "#0c3638",
    900: "#001414",
  },
};

const global = {
  body: {
    color: "green.300",
  },
};

const styles = {
  global,
};

export const theme = extendTheme({ colors, styles });
