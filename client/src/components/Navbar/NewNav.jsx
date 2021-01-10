import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";

const TheNavbar = () => {
  return (
    <>
      <Navbar id="navbod" sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/grid">
          <img
            alt="CoLab logo, round potion bottle"
            src="/assets/images/CoLab_Logo1.png"
            className="d-inline-block align-top"
            id="logo"
          />{' '}
          <Navbar.Text id="title">
            CoLab
          </Navbar.Text>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark">
              <img id="hamberder" src="/assets/icons/ham-menu.png" alt="hamburger menu icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="right" className="ddm">
              <Dropdown.Item href="/profile">profile</Dropdown.Item>
              <Dropdown.Item href="/grid">grid</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
      {/* <nav className="Navbar">
      <div className="Navbar-brand">
        <img src="/assets/images/CoLab_Logo1.png" alt="CoLab logo, round potion bottle"/>
        <span id="title">CoLab</span>
      </div>

      <ul className="Navbar-links">
        {/* <li className="Navbar-link">
          <Link to="/">
            Home
          </Link>
        </li>
        {/* we don't actually want a link to the homepage,
        that's just for logging in and signing up
        
        {/* is there a way to use passport to redirect them to the login/signup page
        if they haven't signed up or logged in?
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
    </nav> */}
    </>
  );
};

export default TheNavbar;

