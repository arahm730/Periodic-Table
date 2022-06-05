import React from "react";
import ElementDescription from "./ElementDescription";
import ElementPopOut from "./ElementPopOut";
import "./Infographic.css";

const Infographic = ({ displayedElement, groupColors }) => {
  return (
    <div className="infographic-container">
      <ElementPopOut element={displayedElement} groupColors={groupColors} />
      <ElementDescription
        element={displayedElement}
        groupColors={groupColors}
      />
    </div>
  );
};

export default Infographic;
