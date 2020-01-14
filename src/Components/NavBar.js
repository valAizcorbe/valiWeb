import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <p>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </p>
  );
}
export default NavBar;
