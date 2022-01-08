import { useState } from "react";
import { Li } from "./styles";
import { theme } from "../../stitches.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { render } from "@testing-library/react";

export function Crypto(props: any) {
  const {
    name,
    i,
    priceUsd,
    symbol,
    addToWatchList,
    removeFromWatchList,
    marketcapUsd,
    volumeChange24h,
  } = props;

  const [selected, setSelected] = useState(false);

  let firstLetterOfName = name.charAt(0).toUpperCase();

  //a little bit of styling logic
  const calculateVolumeColor = () => {
    if (Math.sign(volumeChange24h) > -1) return theme.colors.red;
    if (volumeChange24h === null) return "inherit";
    return theme.colors.green;
  };

  //this is passed into the stitches built in css prop
  const conditionalStyles = {
    "& .binocularIcon": {
      color: selected ? theme.colors.selectedColor : "inherit",
      opacity: selected ? "1" : ".5",
    },
    "& .cryptoVolume": {
      color: calculateVolumeColor(),
    },
  };

  const handleAddRemoveClick = (name: String) => {
    setSelected(!selected);
    !selected ? addToWatchList() : removeFromWatchList(name);
  };

  return (
    <Li key={`${name} ${i}`} css={conditionalStyles}>
      <div>
        Name: <span className="cryptoName">{name}</span>
      </div>
      <div>
        Price(USD): <span>{priceUsd || "N/A"}</span>
      </div>
      <div className="cryptoHiddenInfo">
        <div>
          Market Cap(USD): <span>{marketcapUsd || "N/A"}</span>
        </div>
        <div>
          Volume Change (24hrs):{" "}
          <span className="cryptoVolume">
            {volumeChange24h !== null ? `${volumeChange24h}%` : "N/A"}
          </span>
        </div>
        <div>
          Symbol: <span>{symbol || "N/A"}</span>
        </div>
      </div>
      <h1>
        <span>{firstLetterOfName}</span>
      </h1>
      <FontAwesomeIcon
        icon={faBinoculars}
        className="binocularIcon"
        onClick={() => handleAddRemoveClick(name)}
      />
    </Li>
  );
}
