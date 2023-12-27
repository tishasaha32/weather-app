import React from "react";

function location({ city }) {
  return (
    <div>
      <h2
        style={{
          fontWeight: "bolder",
          fontSize: "1.2rem",
          margin: "0",
        }}
      >
        {city}
      </h2>
    </div>
  );
}

export default location;
