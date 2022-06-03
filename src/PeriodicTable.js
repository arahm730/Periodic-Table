import React, { useState } from "react";
import data from "./elements.json";
import Element from "./Element";
import Infographic from "./Infographic";


const PeriodicTable = () => {

  const [infoComponent, setInfoComponent] = useState(false)     // will not show infographic when page is first loaded
  const [displayedElement, setDisplayedElement] = useState([]);

  function clickedElement() {
    setInfoComponent(true)
  }


  return (
    <div className="periodic-table">
      {data.elements.map((element) => (
        <Element
          setDisplayedElement={setDisplayedElement}
          clickedElement={clickedElement}
          element={element}
          key={element.name}
        ></Element>
      ))}
      {infoComponent ? (
        <Infographic displayedElement={displayedElement} />
      ) : null}
    </div>
  );
};

export default PeriodicTable;
