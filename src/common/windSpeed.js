import React from "react";
import { FaWind } from "react-icons/fa";

function windSpeed({ windSpeed }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0",
        alignItems: "center",
      }}
    >
      <FaWind style={{ width: "1.5rem", height: "1.5rem" }} />
      <p style={{ margin: "0", fontWeight: "bolder", fontSize: "16px" }}>
        {windSpeed} mph W
      </p>
      <p style={{ margin: "0", fontSize: "14px" }}>Wind Speed</p>
    </div>
  );
}

export default windSpeed;
