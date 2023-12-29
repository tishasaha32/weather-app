import React from "react";
import humidityIcon from "../assets/humidity.png";

function humidity({ humidity }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0",
        alignItems: "center",
      }}
    >
      <img src={humidityIcon} />
      <p style={{ margin: "0", fontWeight: "bolder", fontSize: "16px" }}>
        {humidity}%
      </p>
      <p style={{ margin: "0", fontSize: "14px" }}>Humidity</p>
    </div>
  );
}

export default humidity;
