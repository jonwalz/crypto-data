import { styled } from "@stitches/react";
import { theme } from "../../stitches.config";

export const Li = styled("li", {
  position: "relative",
  margin: "20px 0px 0px 0px",
  borderRadius: "15px",
  padding: "12px",
  width: "50vw",
  borderBottom: "solid 1px",
  borderLeft: "solid 1px",
  listStyleType: "none",
  "&:hover": {
    "& .cryptoHiddenInfo": {
      height: "200",
      opacity: "1",
      display: "inline-block",
      transform: "translate(y)",
    },
    cursor: "pointer",
  },
  "& span": {
    color: theme.colors.selectedColor,
    opacity: ".8",
  },
  "& *": {
    margin: "7px 0px 0px 7px",
  },
  "& h1": {
    opacity: ".5",
  },
  "& .cryptoName": {
    color: theme.colors.cyan,
  },
  "& .binocularIcon": {
    position: "absolute",
    fontSize: theme.fontSizes.icon,
    top: "0",
    right: "0",
    "&:hover": {
      color: theme.colors.selectedColor,
      opacity: "1",
      cursor: "pointer",
    },
  },
  "& .cryptoHiddenInfo": {
    height: "0",
    opacity: "0",
    width: "100%",

    transition: "all .2s ease",
  },
  "@media (max-width: 600px)": {
    width: "100%",
  },
});
