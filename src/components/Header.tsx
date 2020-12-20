import { Link } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs/Breadcrumbs";
import * as React from "react";
import { ReactComponent as Logo } from "../images/Interior design Latvalahti_logo.svg";

const header = {
  backgroundColor: "#fdfdfd",
  fontFamily: "Quicksand",
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  padding: 100,
  p: 3,
};

const text = {
  fontFamily: "Quicksand",
};

export const Header = () => {
  return (
    <header style={header}>
      <Logo height={300} width={300} />
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
        <Link
          color="inherit"
          href="/contact"
          onClick={() => console.log("Contact")}
          aria-current="page"
        >
          Contact
        </Link>
      </Breadcrumbs>
    </header>
  );
};
