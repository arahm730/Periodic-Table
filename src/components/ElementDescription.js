import React from "react";
import "./ElementDescription.css";
import Detail from "./Detail";

const ElementDescription = ({ element }) => {
  const details = {
    Category: [element.category, null],
    Mass: [element.atomic_mass, "grams"],
    Density: [element.density, "grams/mol"],
    Affinity: [element.electron_affinity, "kJ/mol"],
    Boiling: [element.boil, "Celsius"],
    Melting: [element.melt, "Celsius"],
    Config: [element.electron_configuration_semantic, null],
  };

  return (
    <div className="description">
      {Object.entries(details).map(([name, value]) => (
        <Detail name={name} value={value} />
      ))}
      <div className="summary">
        <p>
          {element.summary.slice(0, 310)}
          {element.summary.length > 310 ? (
            <a href={element.source}>...See more</a>
          ) : (
            <a href={element.source}>Source</a>
          )}
        </p>
      </div>
    </div>
  );
};

export default ElementDescription;
