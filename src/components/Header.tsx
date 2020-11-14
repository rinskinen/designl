import { Link } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs/Breadcrumbs";
import * as React from "react";

const header = {
  backgroundColor: "#fdfdfd",
  fontFamily: "Quicksand",
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  padding: 200,
  p: 3,
};

const text = {
  fontFamily: "Quicksand",
};

export const Header = () => {
  return (
    <header style={header}>
      <h1>Design Latvalahti</h1>
      <Breadcrumbs aria-label="breadcrumb" style={text}>
        <Link
          color="inherit"
          href="/"
          onClick={() => console.log("Kotisivulle")}
        >
          Home
        </Link>
        <Link
          color="inherit"
          href="/aboutme"
          onClick={() => console.log("About me")}
        >
          About me
        </Link>
        <Link
          color="inherit"
          href="/gallery"
          onClick={() => console.log("Gallery")}
          aria-current="page"
        >
          Gallery
        </Link>
      </Breadcrumbs>
    </header>
  );
};
