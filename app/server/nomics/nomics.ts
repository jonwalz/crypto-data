import Nomics from "nomics";
import { formatCurrencies } from "./utils";

// ...

const nomics = new Nomics({
  apiKey: "m_871efb33a61272254a461abe6a86a5eebb43cc57",
});

export async function nomicsFetchCurrencies() {
  try {
    const currencies = await nomics.currenciesTicker();
    return formatCurrencies(currencies);
  } catch (e) {
    throw new Error(e);
  }
}
