/*import statements*/
import React from 'react';
/*import { Navbar, Nav } from 'react-bootstrap';*/
import { Link } from "react-router-dom";

export const NavBar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
                <img
                    src={props.logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Bastien Ratat Logo"
                />
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/projects">PROJECTS</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/resume">RESUME</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
