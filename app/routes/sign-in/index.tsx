import { useState } from "react";
import { Flex, Box, Stack, Button, Heading, Input } from "@chakra-ui/react";
import { useFetcher } from "@remix-run/react";
import {
  ActionFunction,
  json,
  LoaderFunction,
} from "@remix-run/server-runtime";
import { handleAttemptLogin, handleCreateUser } from "./utils";
import { redirectUser } from "~/session.server";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

let web3: Web3 | undefined = undefined; // Will hold the web3 instance

export const loader: LoaderFunction = async ({ request }) => {
  await redirectUser(request, {
    redirect: "/dashboard",
  });
  return {};
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const address = form.get("publicAddress").toString();

  try {
    return await handleAttemptLogin(address, "/screener");
  } catch (e) {
    const user = handleCreateUser(address);

    return json(user);
  }
};

export default function SignIn() {
  const fetcher = useFetcher();
  const [address, setAddress] = useState<string | null>("");

  const handleGetAddress = async () => {
    // Check if MetaMask is installed
    if (!(window as any).ethereum) {
      window.alert("Please install MetaMask first.");
      return;
    }

    if (!web3) {
      try {
        // Request account access if needed
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        const provider = await detectEthereumProvider();
        // @ts-ignore
        web3 = new Web3(provider);
      } catch (error) {
        window.alert("You need to allow MetaMask.");
        return;
      }
    }
    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });

    const publicAddress = accounts[0];

    const msgParams = JSON.stringify("Log into crypto-data");

    const ethResult = await (window as any).ethereum.request({
      method: "personal_sign",
      params: [publicAddress, msgParams],
    });

    fetcher.submit({ publicAddress }, { method: "post", action: "/sign-in" });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"brand.800"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in with your wallet</Heading>
        </Stack>
        <Box rounded={"lg"} bg={"gray.700"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <fetcher.Form method="post" action="/sign-in">
              <Stack spacing={10}>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.currentTarget.value)}
                  name="publicAddress"
                  readOnly
                />
                <Button
                  onClick={handleGetAddress}
                  bg={"brand.400"}
                  color={"white"}
                  _hover={{
                    bg: "brand.500",
                  }}
                >
                  Connect wallet
                </Button>
                <Button
                  type="submit"
                  bg={"brand.400"}
                  color={"white"}
                  _hover={{
                    bg: "brand.500",
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </fetcher.Form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
