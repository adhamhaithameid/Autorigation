// src/components/TempRangeWidget.jsx
import React from "react";
import "./RangeWidget.css";

const TempRangeWidget = () => {
  return (
    <div className="range-widget">
      <label className="widget-label">Min/Max Temp (°C)</label>
      <div className="range-inputs">
        <input type="number" placeholder="Min" min="-20" max="50" />
        <input type="number" placeholder="Max" min="-20" max="50" />
      </div>
    </div>
  );
};

export default TempRangeWidget;
