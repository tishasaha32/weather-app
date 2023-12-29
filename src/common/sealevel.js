import React from "react";
import sealevelIcon from "../assets/sealevel.png";

function sealevel({ sealevel }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0",
        alignItems: "center",
      }}
    >
      <img src={sealevelIcon} />
      <p style={{ margin: "0", fontWeight: "bolder", fontSize: "16px" }}>
        {sealevel}%
      </p>
      <p style={{ margin: "0", fontSize: "14px" }}>Sea level</p>
    </div>
  );
}

export default sealevel;
