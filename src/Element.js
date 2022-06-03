import React from "react";
import "./Element.css";

const Element = ({ setDisplayedElement, clickedElement, element }) => {
  return (
    <div
      className="element"
      style={{ gridColumn: element.xpos, gridRow: element.ypos }}
      onClick={() => {clickedElement(); setDisplayedElement(element);}}
    >
      <div className="number">{element.number}</div>
      <br />
      <div className="symbol">{element.symbol}</div>
      <div className="name">
        <strong>{element.name}</strong>
      </div>
    </div>
  );
};

export default Element;
