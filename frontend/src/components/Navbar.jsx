import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ title, firstName, loginText, logoutText }) => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src="argentBankLogo.png" alt="Argent Bank Logo" />
        <h1 className="sr-only">{title}</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </NavLink>
        <NavLink className="main-nav-item" href="./index.html">
          <i className="fa fa-sign-out"></i>
          {logoutText}
        </NavLink>
        <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          {loginText}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
