import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Container from "react-bootstrap/Container";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-brand">
        <img src="/assets/images/CoLab_Logo1.png" alt="CoLab logo, round potion bottle"/>
        <span id="title">CoLab</span>
      </div>

      <ul className="Navbar-links">
        {/* <li className="Navbar-link">
          <Link to="/">
            Home
          </Link>
        </li> */}
        {/* we don't actually want a link to the homepage,
        that's just for logging in and signing up */}
        
        {/* is there a way to use passport to redirect them to the login/signup page
        if they haven't signed up or logged in? */}
        <li className="Navbar-link">
          <Link to="/profile">
            Profile
          </Link>
        </li>

        <li className="Navbar-link">
          <Link to="/grid">
            Grid
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

