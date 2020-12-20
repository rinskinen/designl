import * as React from "react";
import Form from "./Form";

const about = {
  backgroundColor: "#fdfdfd",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};

export const Contact = () => {
  return (
    <div style={about}>
      <Form />
    </div>
  );
};
