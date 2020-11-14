import * as React from "react";
import Dima from "../images/dima.jpeg";

const about = {
  backgroundColor: "#fdfdfd",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};

const text = {
  fontFamily: "Quicksand",
  fontSize: 28,
  paddingLeft: 50,
};

export const About = () => {
  return (
    <div style={about}>
      <img src={Dima} alt="self portrait" />
      <div style={text}>
        <p>
          I'm baby quinoa butcher dreamcatcher, poutine migas live-edge jean
          shorts distillery prism hexagon austin meh cold-pressed swag.
        </p>
        <p>
          Live-edge skateboard leggings, disrupt migas tumeric readymade mixtape
          irony waistcoat shaman pork belly selvage pickled.
        </p>
        <p>
          Lyft shaman jianbing, butcher PBR&B disrupt slow-carb sustainable
          health goth.
        </p>
        <br />
        <p>
          Organic four dollar toast health goth pitchfork pour-over, hoodie man
          bun pug tumeric XOXO snackwave edison bulb thundercats echo park
          chicharrones.
        </p>
        <p>
          Fingerstache activated charcoal man braid vexillologist schlitz
          adaptogen sartorial hammock meditation.
        </p>
        <br />
        <p>
          Microdosing brooklyn aesthetic poutine palo santo asymmetrical, etsy
          health goth adaptogen YOLO chillwave snackwave coloring book.
        </p>
        <br />
        <p>Enamel pin vegan truffaut man braid biodiesel. </p>
        <p>
          Marfa church-key direct trade VHS, stumptown pour-over tacos air plant
          food truck forage.
        </p>
        <p>Fashion axe sriracha sustainable bicycle rights palo santo.</p>
        <br />
        <p>
          Migas ramps irony, succulents crucifix stumptown tbh semiotics direct
          trade bespoke.
        </p>
      </div>
    </div>
  );
};
