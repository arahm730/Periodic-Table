import React from 'react'
import "./ElementDescription.css"

const ElementDescription = ({element}) => {
  return (
    <div className="description">
      <span>Atomic mass: {element.atomic_mass}</span>
      <span>Boiling Point: {element.boil}</span>
      <span>Melting Point: {element.melt}</span>
      <span>Molar heat: {element.molar_heat}</span>
      <span>Density: {element.density}</span>
      <span>
        Electronic Configuration: {element.electron_configuration_semantic}
      </span>
      <div className="summary">
        <span>{element.summary}</span>
      </div>
    </div>
  );
}

export default ElementDescription