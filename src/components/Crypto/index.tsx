import { useState } from "react";
import { Li } from "./styles";
import { theme } from "../../stitches.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

export function Crypto({ name, i, priceUsd, symbol, handleWatchList }) {
  const [selected, setSelected] = useState(false);
  let firstLetterOfName = name.charAt(0);

  const addToWatchList = (id) => {
    if (id === i) {
      setSelected(!selected);
      handleWatchList();
    }
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
        onClick={() => addToWatchList(i)}
      />
    </Li>
  );
}
