import { redirect, LoaderFunction } from "@remix-run/server-runtime";
import { getUser } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  if (user) {
    return redirect("screener");
  }
  return redirect("sign-in");
};
