import React from "react";
import pressureIcon from "../assets/pressure.png";

function pressure({ pressure }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0",
        alignItems: "center",
      }}
    >
      <img src={pressureIcon} style={{ width: "24px", height: "24px" }} />
      <p style={{ margin: "0", fontWeight: "bolder", fontSize: "16px" }}>
        {pressure}%
      </p>
      <p style={{ margin: "0", fontSize: "14px" }}>Pressure</p>
    </div>
  );
}

export default pressure;
