import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate } from "react-router-dom";
import { getToken } from "../features/tokenSlice";
import { getUserName } from "../features/userNameSlice";
import { getLoginFetch } from "../services/api";

const Navbar = () => {
  // Use Selector
  const userName = useSelector(state => state.userName.value);

  const token = useSelector(state => state.token.value);

  // Use Effect
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === localStorage.getItem("token")) {
      dispatch(getToken(localStorage.getItem(token)));
      const user = getLoginFetch(token);
      user.then(object => {
        dispatch(getUserName(object.userName));
      });
    }
  });

  // Handle Logout
  const handleLogout = () => {
    dispatch(getToken(0));
    localStorage.removeItem("isLogged");
    return <Navigate to="/" />;
  };

  const connected = JSON.parse(localStorage.getItem("isLogged"));
  console.log(!connected);

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src="argentBankLogo.png" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        {!connected ? (
          <>
            <NavLink className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="main-nav-item" to="./profile">
              <i className="fa fa-user-circle"></i>
              {userName}
            </NavLink>
            <NavLink className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
