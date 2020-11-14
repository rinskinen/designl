import * as React from "react";
import { Banner } from "./Banner";

const home = {
  display: "grid",
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: "#fdfdfd",
  flex: "1 1 auto",
  p: 3,
};

export const Home = () => {
  return (
    <div style={home}>
      <Banner />
    </div>
  );
};
