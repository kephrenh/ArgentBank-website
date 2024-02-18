import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getToken } from "../features/tokenSlice.js";
import { getLogin } from "../services/api.js";

const LoginForm = ({ buttonText }) => {
  // Use State
  const [loginError, setLoginError] = useState("");
  const [loginStatus, setLoginStatus] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // Use Selector
  const token = useSelector(state => state.token.value);

  // Use Effect
  useEffect(() => {
    if (token === localStorage.getItem("token")) {
      addToken(localStorage.getItem("token"));
    }
  });

  // Handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    const login = getLogin({ email: email, password: password });
    login.then(object => {
      if (object.status !== 400) {
        setLoginStatus(object.status);
        addToken(object.token);
      } else {
        setLoginError(object.message);
      }
    });
  };

  // Handle Remember
  const handleRemember = e => {
    setRemember(e.target.checked);
  };

  // Add the token
  const dispatch = useDispatch();
  const addToken = token => {
    if (remember === true) {
      localStorage.setItem("token", token);
    }
    dispatch(getToken(token));
  };

  // Redirection
  if (token !== 0 || loginStatus === 200 || token === localStorage.getItem("token"))
    return <Navigate to="/profile" />;

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onChange={handleRemember} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <div>{loginError}</div>
      <button className="sign-in-button">{buttonText}</button>
    </form>
  );
};

export default LoginForm;
