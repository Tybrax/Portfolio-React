/*import statements*/
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className="nabvar">
            <Navbar.Brand>
                <img
                    src={props.logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Bastien Ratat Logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link className="nav-link" to="/">HOME</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" to="/projects">PROJECTS</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" to="/resume">RESUME</Link></Nav.Link>
                <Nav.Link><Link className="nav-link" to="/contact">CONTACT</Link></Nav.Link>
            </Nav>
        </Navbar>
    )
};
