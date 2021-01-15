import React from 'react';
import './Navbar.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const TheNavbar = (props) => {
  // this needs to be in a function or something so it can change to true if user is logged in
  let isLoggedIn = props.loggedIn;

  return (
    <>
      <Navbar id="navbod" sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/grid">
          <img
            alt="CoLab logo, round potion bottle"
            src="/assets/images/colab-logo-white.png"
            className="d-inline-block align-top"
            id="logo"
          />{' '}
          <Navbar.Text id="title">
            CoLab
          </Navbar.Text>
        </Navbar.Brand>
        {isLoggedIn && (<Nav className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle id="hambut" variant="outline-dark">
              <img id="hamberder" src="/assets/icons/ham-menu.png" alt="hamburger menu icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="right" className="ddm">
              <Dropdown.Item className="menulink" href="/profile">profile</Dropdown.Item>
              <Dropdown.Item className="menulink" href="/grid">grid</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>)}
      </Navbar>
    </>
  );
};

export default TheNavbar;

