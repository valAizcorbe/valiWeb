import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
function NavBar() {
  return (
    <p className="navbar">
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/about">
        <button>ABOUT</button>
      </Link>
      <Link to="/projects">
        <button>PROJECTS</button>
      </Link>
      <Link to="/contact">
        <button>CONTACT</button>
      </Link>
    </p>
  );
}
export default NavBar;
