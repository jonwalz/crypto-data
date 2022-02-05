// https://fusejs.io/
import Fuse from "fuse.js";
import { CryptoItem } from "~/components/CryptoSummary/types";

export function searchData(searchString, data: CryptoItem[]) {
  const fuse = new Fuse(data, {
    keys: ["name", "ticker"],
    isCaseSensitive: false,
    findAllMatches: true,
  });

  return fuse.search(searchString);
}
