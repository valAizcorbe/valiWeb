import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import DropDown from "./menu/index";

function NavBar() {
  const [menu, setMenu] = useState(false);
  // const [icon, changeIcon] = useState(false)

  return (
    <p className="navbar">
      <div className="name-logo">
        <Link to="/">
          <h1 className="nav-button">Valeria Aizcorbe</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/about">
          <h3 className="nav-button">ABOUT</h3>
        </Link>
        <Link to="/projects">
          <h3 className="nav-button">PROJECTS</h3>
        </Link>
        <Link to="/contact">
          <h3 className="nav-button">CONTACT</h3>
        </Link>
      </div>
      <button className="menu" onClick={() => setMenu(!menu)}>
        {menu ? <IoMdClose /> : <IoIosMenu />}
      </button>
      {menu ? <DropDown /> : !menu}
    </p>
  );
}
export default NavBar;
