import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFirstName } from "../features/firstNameSlice";
import { getToken } from "../features/tokenSlice";
import { getLoginFetch } from "../services/api";

const Navbar = () => {
  // Use Selector
  const firstName = useSelector((state) => state.firstName.value);
  const token = useSelector((state) => state.token.value);

  // Use Effect
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === localStorage.getItem("token")) {
      dispatch(getToken(localStorage.getItem(token)));
      const user = getLoginFetch(token);
      user.then((object) => {
        dispatch(getFirstName(object.firstName));
      });
    }
  });

  // Handle Logout
  const handleLogout = () => {
    dispatch(getToken(0));
    localStorage.removeItem("isLogged");
    localStorage.removeItem("token");
  };

  const connected = JSON.parse(localStorage.getItem("isLogged"));

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        {!connected ? (
          <>
            <NavLink className="main-nav-item" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="main-nav-item" to="./profil">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </NavLink>
            <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
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
