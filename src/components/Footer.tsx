import { Link } from "@material-ui/core";
import * as React from "react";

const footer = {
  backgroundColor: "#fdfdfd",
  fontFamily: "Quicksand",
  display: "grid",
  alignContent: "center",
  justifyContent: "center",
  padding: 200,
  p: 3,
  textAlign: "center" as "center",
};

export const Footer = () => {
  return (
    <div style={footer}>
      <div>
        <p>Interior Design Latvalahti</p>
        <p>
          <Link href="mailto: dima.latvalahti@gmail.com">
            dima.latvalahti@gmail.com
          </Link>
        </p>
        <p>
          <Link href="tel: 0453565554">0453565554</Link>
        </p>
        <p>Y-tunnus: 2361455-8</p>
        <Link href="https://www.instagram.com/casalautaajabetonia/?hl=fi">
          Instagram
        </Link>
      </div>
    </div>
  );
};
