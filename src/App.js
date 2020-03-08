/*Import React and useState hook*/
import React from 'react';
/*Import React-router elements*/
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
/*Import a CSS stylesheet, BS4 and its elements*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
/*Import components*/
import { NavBar } from './components/navbar/NavBar.js';
import { Header } from './components/homepage/Header.js';
import { Showcase } from './components/project/Showcase.js'
import { Resume } from './components/resume/Resume.js';
import { Contact } from './components/contact/Contact.js';
import { Footer } from './components/footer/Footer.js';

/*Import logo*/
import logoBlack from './images/logo_b.png';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar logo={logoBlack}/>
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

