import { createClient, Provider } from "urql";
import { Currencies } from "./components/Currencies";
import { globalCss, theme } from "./stitches.config";

import "./App.css";

export const santimentClient = createClient({
  url: "https://api.santiment.net/graphql",
});

const globalStyles = globalCss({
  body: {
    margin: 0,
    background: theme.colors.blue800,
    color: theme.colors.blue500,
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`
  },
  code: {
    fontFamily: `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace`,
  }
})

function App() {
  globalStyles();

  return (
    <Provider value={santimentClient}>
      <Currencies />
    </Provider>
  );
}

export default App;
