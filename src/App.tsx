import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Services } from './components/pages/Services';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import styled from 'styled-components';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';

const AppStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  font-family: Quicksand !important;
  @media (min-width: 320px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    padding: 100px;
  }
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
