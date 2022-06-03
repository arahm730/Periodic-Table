import React from 'react'
import "./Infographic.css"

const Infographic = ({ displayedElement }) => {
  return <div className="infographic-container">{displayedElement.name}</div>;
};

export default Infographic