// import "../../App.css";
import { Li } from "./styles";

export function Crypto({ name, i, priceUsd, symbol }) {
  let firstLetterOfName = name.charAt(0);

  return (
    <Li key={`${name} ${i}`}>
      <div>
        Name: <span>{name}</span>
      </div>
      <div>
        Symbol: <span>{symbol || "N/A"}</span>
      </div>
      <div>
        Price(USD): <span>{priceUsd || "N/A"}</span>
      </div>
      <h1 style={{ opacity: ".5" }}>
        <span>{firstLetterOfName}</span>
      </h1>
    </Li>
  );
}
