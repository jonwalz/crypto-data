import { styled } from "@stitches/react";

export const Li = styled("li", {
  position: "relative",
  margin: "20px 0px 0px 0px",
  padding: "12px",
  width: "50vw",
  borderBottom: "solid 1px",
  borderLeft: "solid 1px",
  listStyleType: "none",
  "& span": {
    color: "#f8f8ff",
    opacity: ".8",
  },
  "& *": {
    margin: "7px 0px 0px 7px",
  },
  "@media (max-width: 600px)": {
    width: "100%",
  },
});
