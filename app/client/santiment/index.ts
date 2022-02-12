import axios from "axios";
import { CURRENCIES_RESPONSE, CURRENCY_DETAIL_RESPONSE } from "./constants";
import { ALL_CURRENCIES_QUERY, CURRENCY_DETAILS_QUERY } from "./queries";

// Go to the endpoint URL to view the explorer
const ENDPOINT = "https://api.santiment.net/graphql";
const headers = {
  "content-type": "application/json",
};

const client = axios.create({
  baseURL: ENDPOINT,
  headers,
});

export async function santimentFetchCurrencies() {
  const graphqlQuery = {
    query: ALL_CURRENCIES_QUERY,
  };

  try {
    const response: CURRENCIES_RESPONSE = await axios.post(
      ENDPOINT,
      graphqlQuery
    );

    return response.data.data.allProjects;
  } catch (e) {
    new Error(e);
    return [];
  }
}

export async function fetchCurrencyDetails(id) {
  const variables = {
    currencyId: id,
  };

  try {
    const response: CURRENCY_DETAIL_RESPONSE = await client({
      method: "post",
      data: {
        query: CURRENCY_DETAILS_QUERY,
        variables,
      },
    });

    console.log("Single resp: ", response.data.data.project);

    return response.data.data.project;
  } catch (e) {
    new Error(e);
    return {} as CURRENCY_DETAIL_RESPONSE["data"]["data"]["project"];
  }
}
