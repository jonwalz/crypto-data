export function Crypto({ name, i, priceUsd }) {
  return (
    <li key={`${name} ${i}`}>
      <div>Name: {name}</div>
      <div>Currency price: {priceUsd ? priceUsd : "N/A"}</div>
    </li>
  );
}
