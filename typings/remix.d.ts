export * from "@remix-run/server-runtime";
declare module "@remix-run/server-runtime" {
  export function json<Data>(
    data: Data,
    init?: number | ResponseInit
  ): Response;
}
