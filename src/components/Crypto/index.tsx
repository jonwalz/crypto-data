import { useState } from "react";
import { Li } from "./styles";
import { theme } from "../../stitches.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

export function Crypto(props) {
  const { name, i, priceUsd, symbol, addToWatchList, removeFromWatchList } =
    props;

  const [selected, setSelected] = useState(false);

  let firstLetterOfName = name.charAt(0);

  const handleAddToWatchList = () => {
    addToWatchList();
  };
  const handleRemoveFromWatchList = (name: string) => {
    removeFromWatchList(name);
  };

  return (
    <Li
      key={`${name} ${i}`}
      css={{
        "& .binocularIcon": {
          color: selected ? theme.colors.lightColor : "inherit",
        },
      }}
    >
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
      <FontAwesomeIcon
        icon={faBinoculars}
        className="binocularIcon"
        onClick={() => {
          setSelected(!selected);
          !selected ? handleAddToWatchList() : handleRemoveFromWatchList(name);
        }}
      />
    </Li>
  );
}
