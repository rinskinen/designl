import * as React from "react";

const gallery = {
  backgroundColor: "#fdfdfd",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};

const text = {
  fontFamily: "Quicksand",
  fontSize: 28,
};

export const Gallery = () => {
  return (
    <div style={gallery}>
      <p style={text}>Kuvia tulossa</p>
    </div>
  );
};
