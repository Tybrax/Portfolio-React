/*import statements*/
import React from 'react';
/*import { Navbar, Nav } from 'react-bootstrap';*/
import { Link } from "react-router-dom";

export const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <img
                    src={props.logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Bastien Ratat Logo"
                />
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">PROJECTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume">RESUME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
