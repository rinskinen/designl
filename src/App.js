import React from "react";
import style from "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App" style={style}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutme">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
