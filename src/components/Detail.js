import React from "react";
import "./Detail.css";

const Detail = ({ element, name, value, groupColors }) => {
  return (
    <div
      className={`single-detail ${name === "Category" ? "doubled" : ""}`}
      style={name === "Category" ? {backgroundColor: groupColors[element.category]} : {backgroundColor: ""} }
    >
      <div className="detail-name">
        <span>{name}</span>
      </div>
      <div
        className={`detail-value ${
          name === "Category" && value[0].length > 30 ? "smaller-category" : ""
        } ${name === "Config" && value[0].length > 16 ? "smaller-config" : ""}`}
      >
        <span>
          {value[0]
            ? name !== "Category" && name !== "Config"
              ? Number.parseFloat(value[0]).toFixed(2)
              : value[0]
            : "N/A"}
          <br></br>
          {value[0] ? value[1] : null}
        </span>
      </div>
    </div>
  );
};

export default Detail;
