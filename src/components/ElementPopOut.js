import React from "react";
import "./ElementPopOut.css";

const ElementPopOut = ({ element }) => {
  return (
    <div className="large-element-square">
      <div className="popout-number">{element.number}</div>
      <br />
      <div className="popout-symbol">{element.symbol}</div>
      <br />
      <div className="popout-name">
        <strong>{element.name}</strong>
      </div>
    </div>
  );
};

export default ElementPopOut;
