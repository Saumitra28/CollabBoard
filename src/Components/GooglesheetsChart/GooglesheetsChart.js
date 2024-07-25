import React from "react";
import "./GoogleSheetChart.css"; // Import a separate CSS file for this component

const GoogleSheetChart = () => {
  return (
   <div className="sheet-wrapper">
     <div className="google-sheet-chart-container">
      <iframe
        className="google-sheet-chart"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRykhdaBCpXu7SyuErtEfhZk3l39-LzCDLx9oahPwmtqWxcSuiEZV3nLjH4uZE9yXLaoqUYx5D2T2QD/pubchart?oid=1953218487&amp;format=interactive"
      ></iframe>
    </div>
   </div>
  );
};

export default GoogleSheetChart;
