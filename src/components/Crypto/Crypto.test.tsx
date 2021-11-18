import { render, screen } from "@testing-library/react";
import { Crypto } from "./";

const props = {
  name: "Test",
  i: 0,
  priceUsd: "1",
  symbol: "",
};
describe("Crypto component", () => {
  it("Should render correctly", () => {
    render(<Crypto {...props} />);

    // screen.debug() will print the dom to the terminal
    // screen.debug();
    screen.getByText(/Name: test/i); // '/Name: test/i' is regex for incomplete match
    screen.getByText(/Currency price: 1/i);
  });
});
