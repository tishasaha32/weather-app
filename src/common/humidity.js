import React from "react";
import { FaDroplet } from "react-icons/fa6";

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
      <FaDroplet style={{ width: "1.5rem", height: "1.5rem" }} />
      <p style={{ margin: "0", fontWeight: "bolder", fontSize: "16px" }}>
        {humidity}%
      </p>
      <p style={{ margin: "0", fontSize: "14px" }}>Humidity</p>
    </div>
  );
}

export default humidity;
