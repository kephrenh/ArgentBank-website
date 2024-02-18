import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ buttonText }) => {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Link to="/profile">
        <button className="sign-in-button">{buttonText}</button>
      </Link>
    </form>
  );
};

export default LoginForm;
