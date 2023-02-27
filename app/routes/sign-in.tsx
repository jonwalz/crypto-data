import { Flex, Box, Stack, Button, Heading } from "@chakra-ui/react";
import { ActionFunction, LoaderFunction } from "@remix-run/server-runtime";
import { Form, useSubmit } from "@remix-run/react";
import { handleAttemptLogin, handleCreateUser } from "../utils/sign-in";
import { redirectUser } from "~/session.server";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

let web3: Web3 | undefined = undefined;

export const loader: LoaderFunction = async ({ request }) => {
  await redirectUser(request, {
    redirect: "/screener",
  });

  return {};
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const address = form.get("publicAddress").toString();

  try {
    return await handleAttemptLogin(address, "/screener");
  } catch (e) {
    return { error: e };
  }
};

export default function SignIn() {
  const submit = useSubmit();

  const handleGetAddress = async () => {
    if (!(window as any).ethereum) {
      window.alert("Please install MetaMask first.");
      return;
    }

    if (!web3) {
      try {
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

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

    submit({ publicAddress: ethResult }, { method: "post" });
  };

  const handleFakeIt = () => {
    submit({ publicAddress: "faker" }, { method: "post" });
  };

  return (
    <Flex
      minH={"100vh"}
      width="100%"
      align={"center"}
      justify={"center"}
      bg={"gray.700"}
      position="absolute"
      left={0}
      top={0}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          border="2px"
          borderColor={"white"}
          boxShadow={"lg"}
          p={8}
        >
          <Heading color={"white"} mb="84px" fontSize={"4xl"}>
            Sign in with your wallet
          </Heading>
          <Stack spacing={4}>
            <Form method="post">
              <Stack spacing={5}>
                <Button
                  onClick={handleGetAddress}
                  bg={"brand.600"}
                  color={"white"}
                  _hover={{
                    bg: "brand.500",
                  }}
                >
                  Connect wallet
                </Button>
                <Button variant="link" onClick={handleFakeIt} color={"white"}>
                  (or just fake it)
                </Button>
              </Stack>
            </Form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
