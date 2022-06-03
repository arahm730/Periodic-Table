import React from "react";
import "./Element.css";

const Element = ({ setDisplayedElement, clickedElement, element }) => {

  const groupColors = {
    "alkali metal": "#ff0000",
    "alkaline earth metal": "#744700",
    "transition metal": "#8fce00",
    "unknown, probably transition metal": "#8fce00",
    actinide: "pink",
    "polyatomic nonmetal": "red",
    "diatomic nonmetal": "#2986cc",
    "post-transition metal": "#16537e",
    "unknown, probably post-transition metal": "#16537e",
    lanthanide: "#c90076",
    metalloid: "#b6d7a8",
    "unknown, probably metalloid": "#b6d7a8",
    "noble gas": "#FFBC42",
    "unknown, predicted to be noble gas": "#FFBC42",
  };

  return (
    <div
      className="element"
      style={{ gridColumn: element.xpos, gridRow: element.ypos, backgroundColor: groupColors[element.category] }}
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
