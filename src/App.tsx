import { createClient, Provider } from "urql";
import { Currencies } from "./components/Currencies";

import "./App.css";

export const santimentClient = createClient({
  url: "https://api.santiment.net/graphql",
});

function App() {
  return (
    <Provider value={santimentClient}>
      <Currencies />
    </Provider>
  );
}

export default App;
