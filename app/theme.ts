import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    400: "#275F6A",
    500: "#4F94A1",
    600: "#397985",
    700: "#194850",
    800: "#0D2F36",
  },
};

const global = {
  body: {
    color: "white",
  },
};

const styles = {
  global,
};

export const theme = extendTheme({ colors, styles });
