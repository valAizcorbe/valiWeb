import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
function NavBar() {
  return (
    <p className="navbar">
      <div className="name-logo">
        <Link to="/">
          <button className="nav-button">Valeria Aizcorbe</button>
        </Link>
      </div>
      <div className="links">
        <Link to="/about">
          <button className="nav-button">About</button>
        </Link>
        <Link to="/projects">
          <button className="nav-button">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="nav-button">Contact</button>
        </Link>
      </div>
    </p>
  );
}
export default NavBar;
