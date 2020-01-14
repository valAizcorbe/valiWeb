import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <p>
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
