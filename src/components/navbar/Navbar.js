import React from "react";
import Logo from "../../images/logo.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav">
          <a href="/">
            <span>00</span> HOME
          </a>
          <a href="/">
            <span>01</span> DESTINATION
          </a>
          <a href="/">
            <span>02</span> CREW
          </a>
          <a href="/">
            <span>03</span> TECHNOLOGY
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
