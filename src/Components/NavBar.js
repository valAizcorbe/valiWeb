import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
function NavBar() {
  return (
    <p className="navbar">
      <Link to="/">
        <button className="nav-button">VALERIA AIZCORBE</button>
      </Link>
      <Link to="/about">
        <button className="nav-button">ABOUT</button>
      </Link>
      <Link to="/projects">
        <button className="nav-button">PROJECTS</button>
      </Link>
      <Link to="/contact">
        <button className="nav-button">CONTACT</button>
      </Link>
    </p>
  );
}
export default NavBar;
