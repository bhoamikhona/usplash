import React from "react";

import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="primary-navbar">
        <a href="/">
          <img className="nav-logo" src={logo} alt="usplash logo" />
        </a>
        <div className="nav-group">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="/" className="nav-link-a">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="/login" className="nav-link-a">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
