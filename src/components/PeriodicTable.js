import React, { useState } from "react";
import data from "../elements.json";
import Element from "./Element";
import Infographic from "./Infographic";
import "./PeriodicTable.css";

const PeriodicTable = () => {
  const groupColors = {
    "alkali metal": "#ff6666",
    "alkaline earth metal": "#fedead",
    "transition metal": "#ffc0bf",
    "unknown, probably transition metal": "#ffc0bf",
    actinide: "#ff99cb",
    "polyatomic nonmetal": "#00ff00",
    "diatomic nonmetal": "#2986cc",
    "post-transition metal": "#cccccc",
    "unknown, probably post-transition metal": "#cccccc",
    lanthanide: "#ffbffe",
    metalloid: "#cccc9a",
    "unknown, probably metalloid": "#cccc9a",
    "noble gas": "gold",
    "unknown, predicted to be noble gas": "gold",
  };

  const [infoComponent, setInfoComponent] = useState(false); // will not show infographic when page is first loaded
  const [displayedElement, setDisplayedElement] = useState([]);

  function clickedElement() {
    setInfoComponent(true);
  }

  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <Element
          setDisplayedElement={setDisplayedElement}
          clickedElement={clickedElement}
          element={element}
          groupColors={groupColors}
          key={element.name}
        ></Element>
      ))}
      {infoComponent ? (
        <Infographic displayedElement={displayedElement} groupColors={groupColors} />
      ) : null}
    </div>
  );
};

export default PeriodicTable;
