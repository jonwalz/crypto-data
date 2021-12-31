import { styled } from "@stitches/react";
import { theme } from "../../stitches.config";

export const Li = styled("li", {
  position: "relative",
  margin: "20px 0px 0px 0px",
  padding: "12px",
  width: "50vw",
  borderBottom: "solid 1px",
  borderLeft: "solid 1px",
  listStyleType: "none",
  "& span": {
    color: theme.colors.lightColor,
    opacity: ".8",
  },
  "& *": {
    margin: "7px 0px 0px 7px",
  },
  "& h1": {
    opacity: ".5",
  },
  "& .binocularIcon": {
    position: "absolute",
    top: "0",
    right: "0",
    "&:hover": {
      color: theme.colors.lightColor,
      opacity: "1",
      cursor: "pointer",
    },
  },
  "@media (max-width: 600px)": {
    width: "100%",
  },
});
