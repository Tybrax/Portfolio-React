import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { Contact } from './components/Contact.js';
import { Header } from './components/Header.js';
import { Resume } from './components/Resume.js';
import { Footer } from './components/Footer.js';
import { Showcase } from './components/Showcase.js'

import logoWhite from './images/logo_w.png';

function App() {

  const [colorOne] = useState('white');
  const [colorTwo] = useState('white');
  const [colorThree] = useState('white');
  const [colorFour] = useState('white');

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" fixed="top" className="nabvar">
            <Navbar.Brand>
                <img
                    src={logoWhite}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Bastien Ratat Logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link className="nav-link" style={{colorOne}} to="/">HOME</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" style={{colorTwo}} to="/projects">PROJECTS</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" style={{colorThree}} to="/resume">RESUME</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" style={{colorFour}} to="/contact">CONTACT</Link></Nav.Link>
            </Nav>
        </Navbar>
        <Container fluid className="spacing">

        </Container>
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

