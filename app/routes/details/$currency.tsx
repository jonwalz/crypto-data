import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";
import {
  CurrencyDetailCard,
  CurrencyDetailCardProps,
} from "~/components/CurrencyDetailCard";
import {
  fetchCurrencyDetails,
  getCurrencyIdFromTicker,
} from "~/server/santiment";

export const loader: LoaderFunction = async ({ params }) => {
  // use params to fetch currency detail
  const currency = params.currency;

  const currencyId = await getCurrencyIdFromTicker(currency);
  const detailsData = await fetchCurrencyDetails(currencyId);

  return detailsData;
};

export default () => {
  const currencyDetails = useLoaderData<CurrencyDetailCardProps>();

  return <CurrencyDetailCard {...currencyDetails} />;
};
