import React from "react";

function temperature({ temperature }) {
  return (
    <div>
      <h1
        style={{
          fontSize: "3.5rem",
          margin: "0",
          paddingTop: "1.5rem",
          fontWeight: "bolder",
        }}
      >
        {temperature}°C
      </h1>
    </div>
  );
}

export default temperature;
