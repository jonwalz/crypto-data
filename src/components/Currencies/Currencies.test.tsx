import { render, screen } from "@testing-library/react";
import { Currencies } from "./index";
import { Provider } from "urql";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { santimentClient } from "../../App";
import { currencyProjectsFixture } from "../../fixtures/currencies";

const worker = setupServer(
  rest.post("https://api.santiment.net/graphql", (req, res, ctx) => {
    return res(ctx.json(currencyProjectsFixture));
  })
);

beforeAll(() => {
  worker.listen();
});

afterAll(() => {
  worker.close();
});

function makeComponentWithProvider() {
  return (
    <Provider value={santimentClient}>
      <Currencies />
    </Provider>
  );
}

describe("Currencies component", () => {
  it("should render correctly", async () => {
    render(makeComponentWithProvider());

    await screen.findByText("Name: Bitcoin");
    await screen.findByText("Currency price: 64197.37076037725");
    await screen.findByText("Name: Binance Coin");
    await screen.findByText("Currency price: 649.0994476866867");
  });
});
