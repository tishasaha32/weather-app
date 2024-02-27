import React from "react";

function weatherCondition({ weatherCondition }) {
  return (
    <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
      {weatherCondition}
    </div>
  );
}

export default weatherCondition;
