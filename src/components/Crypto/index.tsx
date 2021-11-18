import "../../App.css";

export function Crypto({ name, i, priceUsd, symbol }) {
  let firstLetterOfName = name.charAt(0);

  return (
    <div className="crypto">
      <li
        key={`${name} ${i}`}
        style={{ listStyleType: "none", margin: "7px 0px 0px 7px" }}
      >
        <div>Name: {name}</div>
        <div>Symbol: {symbol}</div>
        <div>Price(USD): {priceUsd || "N/A"}</div>
        <h1 style={{ opacity: ".5" }}>{firstLetterOfName}</h1>
      </li>
    </div>
  );
}
