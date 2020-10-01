import React from "react";
import "./Navbar.css";
import logo from "./Logo.svg";

function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="nav-img" className="navImg" />
      <h1 className="navName">EVERYTHING FOOD</h1>
    </div>
  );
}

export default Navbar;
