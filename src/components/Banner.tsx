import { Link } from "@material-ui/core";
import * as React from "react";

const banner = {
  alignSelf: "center",
  backgroundColor: "#dbdbdb",
  fontFamily: "Quicksand",
  fontSize: 24,
  display: "grid",
  aligContent: "center",
  justifyContent: "center",
  padding: 50,
  margin: 100,
  borderRadius: 8,
};

const link = {
  textAlign: "center" as "center",
  paddingTop: 30,
};

export const Banner = () => {
  return (
    <div style={banner}>
      <p>
        "I'm baby quinoa butcher dreamcatcher, poutine migas live-edge jean
        shorts distillery prism hexagon austin meh cold-pressed swag.
      </p>
      <p>
        Live-edge skateboard leggings, disrupt migas tumeric readymade mixtape
        irony waistcoat shaman pork belly selvage pickled."
      </p>
      <Link href="/aboutme" style={link}>
        More about me
      </Link>
    </div>
  );
};
