import axios from "axios";
import { CURRENCIES_RESPONSE, CURRENCY_DETAIL_RESPONSE } from "./constants";
import {
  ALL_CURRENCIES_QUERY,
  CURRENCY_DETAILS_QUERY,
  GET_CURRENCY_ID_BY_TICKER,
} from "./queries";

const ENDPOINT = "https://api.santiment.net/graphql";

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
    const response: CURRENCY_DETAIL_RESPONSE = await axios.post(ENDPOINT, {
      query: CURRENCY_DETAILS_QUERY,
      variables,
    });

    return response.data.data.project;
  } catch (e) {
    new Error(e);
    return {} as CURRENCY_DETAIL_RESPONSE["data"]["data"]["project"];
  }
}

export async function getCurrencyIdFromTicker(ticker: string) {
  const variables = {
    currencyTicker: ticker,
  };

  try {
    const response = await axios.post(ENDPOINT, {
      query: GET_CURRENCY_ID_BY_TICKER,
      variables,
    });

    return response.data.data.allProjectsByTicker?.[0]?.id;
  } catch (e) {
    new Error(e);
    return e;
  }
}
