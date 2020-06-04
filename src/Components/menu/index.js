import React from "react";
import { Link } from "react-router-dom";
import { PopUp } from "./style";

function DropDown() {
  return (
    <PopUp>
      <ul className="drop-menu">
        <li>
          <Link to="/about">
            <h3 className="nav-button">ABOUT</h3>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <h3 className="nav-button">PROJECTS</h3>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <h3 className="nav-button">CONTACT</h3>
          </Link>
        </li>
      </ul>
    </PopUp>
  );
}

export default DropDown;
