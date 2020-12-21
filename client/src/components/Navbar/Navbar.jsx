import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-brand">
        <span>CoLab</span>
      </div>

      <ul className="Navbar-links">
        <li className="Navbar-link">
          <Link to="/">
            Home
          </Link>
        </li>

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

