import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    src={props.logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#resume">RESUME</Nav.Link>
                <Nav.Link href="#contactme">CONTACT ME</Nav.Link>
            </Nav>
        </Navbar>
    );
};
