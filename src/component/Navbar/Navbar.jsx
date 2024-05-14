import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        {/* <img src="logo.png" alt="Logo" className="logo-img" /> */}
        <h1>Ravi Pratihast</h1>
        {/* <h3>Pratihast</h3> */}
      </div>

      {/* Navigation links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link contact-btn">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
