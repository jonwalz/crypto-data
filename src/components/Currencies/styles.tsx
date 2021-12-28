import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

export const Input = styled("input", {
  all: "unset",
  width: 200,
  display: "block",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  position: "fixed",
  margin: "3px 0px 12px 30px",
  padding: "0 10px",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: "white",
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

export const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
