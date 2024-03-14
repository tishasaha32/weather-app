import React from "react";
import { TbDropletPin } from "react-icons/tb";

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
      <TbDropletPin style={{ width: "1.5rem", height: "1.5rem" }} />
      <p style={{ margin: "0", fontWeight: "bolder", fontSize: "16px" }}>
        {pressure}%
      </p>
      <p style={{ margin: "0", fontSize: "14px" }}>Pressure</p>
    </div>
  );
}

export default pressure;
