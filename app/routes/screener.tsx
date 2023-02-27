import {
  Box,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import {
  Form,
  useActionData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/server-runtime";
import { santimentFetchCurrencies } from "~/server/santiment";
import { CryptoSummary } from "~/components/CryptoSummary";
import { CryptoItem } from "~/components/CryptoSummary/types";
import { searchData } from "~/utils/search";

export const loader: LoaderFunction = async ({ request }) => {
  // await requireUser(request, {
  //   redirect: '/sign-in',
  // })

  return null;
};

export async function action({ request }) {
  const result = await request.formData();
  const searchString = result.get("crypto-search");

  if (!searchString) return null;

  const data = await santimentFetchCurrencies();

  return json(searchData(searchString, data));
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
    <Flex flexDir="column" px="3">
      <Form method="post" onChange={handleChange}>
        <Input
          name="crypto-search"
          type="text"
          placeholder="SEARCH"
          color="white"
          autoComplete="off"
          mt={4}
        />
      </Form>
      <Box mt="2">
        {["loading", "submitting"].includes(transition.state) ? (
          <Spinner size="lg" />
        ) : (
          data &&
          data.map((item: CryptoItem) => (
            <CryptoSummary item={item} key={item.refIndex} />
          ))
        )}
      </Box>
    </Flex>
  );
};
