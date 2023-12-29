import React from "react";
import windspeedIcon from "../assets/windspeed.png";

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
      <img src={windspeedIcon} />
      <p style={{ margin: "0", fontWeight: "bolder", fontSize: "16px" }}>
        {windSpeed} mph W
      </p>
      <p style={{ margin: "0", fontSize: "14px" }}>Wind Speed</p>
    </div>
  );
}

export default windSpeed;
