import { Box, Input, Spinner } from "@chakra-ui/react";
import { Form, json, useActionData, useSubmit, useTransition } from "remix";
import { fetchCurrencies } from "~/client";
import { CryptoSummary } from "~/components/CryptoSummary";
import { CryptoItem } from "~/components/CryptoSummary/types";
import { searchData } from "./utils";

export async function loader() {
  return null;
}

export async function action({ request }) {
  const result = await request.formData();
  const searchString = result.get("crypto-search");

  if (!searchString) return null;

  const data = await fetchCurrencies();

  return json(searchData(searchString, data.data.allProjects));
}

// https://remix.run/docs/en/v1/api/remix#usesubmit
export default () => {
  const submit = useSubmit();
  const data = useActionData();
  const transition = useTransition();

  const handleChange = (event) => {
    submit(event.currentTarget, { replace: true });
  };

  return (
    <>
      <Form method="post" onChange={handleChange}>
        <Input
          name="crypto-search"
          type="text"
          placeholder="SEARCH"
          color="white"
          autoComplete="off"
        />
      </Form>
      <Box mt="2">
        {["loading", "submitting"].includes(transition.state) ? (
          <Spinner size="lg" />
        ) : (
          data && data.map((item: CryptoItem) => <CryptoSummary item={item} />)
        )}
      </Box>
    </>
  );
};
