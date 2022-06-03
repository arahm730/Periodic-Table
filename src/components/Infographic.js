import React from "react";
import ElementDescription from "./ElementDescription";
import ElementPopOut from "./ElementPopOut";
import "./Infographic.css";

const Infographic = ({ displayedElement }) => {
  return (
    <div className="infographic-container">
      <ElementPopOut element={displayedElement} />
      <ElementDescription element={displayedElement} />
    </div>
  );
};

export default Infographic;
