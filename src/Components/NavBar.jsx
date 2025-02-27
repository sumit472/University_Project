import React from "react";
import "./Navbar.css";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav1">
        <img src={logo} />
        <p>
          Novalyn <br></br> University
        </p>
      </div>
      <div className="nav2">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Academics">Academics</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Admission">Admission </Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="nav3">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default NavBar;
