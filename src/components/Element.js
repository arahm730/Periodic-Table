import React from "react";
import "./Element.css";

const Element = ({ setDisplayedElement, clickedElement, element, groupColors }) => {


  return (
    <div
      className="element"
      style={{
        gridColumn:
          (element.number > 56 && element.number < 72) ||
          (element.number > 88 && element.number < 104)
            ? element.xpos + 1
            : element.xpos,
        gridRow: element.ypos,
        backgroundColor: groupColors[element.category],
      }}
      onClick={() => {
        clickedElement();
        setDisplayedElement(element);
      }}
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
