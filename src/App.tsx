import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import styled from 'styled-components';
//import { Portfolio } from './components/Portfolio';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Quicksand;
`;

const App = () => {
  return (
    <AppStyled>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/suunnittelija">
            <About />
          </Route>
          <Route path="/palvelut">
            <Services />
          </Route>
          {/* <Route path="/portfolio">
            <Portfolio />
          </Route> */}
          <Route path="/otayhteyttä">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </AppStyled>
  );
};

export default App;
