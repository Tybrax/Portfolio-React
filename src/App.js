/*Import React and useState hook*/
import React, {useState} from 'react';
/*Import React-router elements*/
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
/*Import a CSS stylesheet, BS4 and its elements*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
/*Import components*/
import { NavBar } from './components/NavBar.js';
import { Header } from './components/Header.js';
import { Showcase } from './components/Showcase.js'
import { Resume } from './components/Resume.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

/*Import logo*/
import logoWhite from './images/logo_w.png';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar logo={logoWhite}/>
        {/*Navbar fixed on top with 4 tabs, no toggle button*/}
        {/*spacing to avoid navbar overlaying other components*/}
        <Container fluid className="spacing">
        </Container>
        {/*Switch to render URL*/}
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/projects">
            <Showcase />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

