import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getFirstName } from "../features/firstNameSlice";
import { getLastName } from "../features/lastNameSlice";
import { getLoginFetch } from "../services/api";
import EditSection from "./EditSection/EditSection";

const ProfileHeader = ({ title }) => {
  const firstName = useSelector(state => state.firstName.value);
  const lastName = useSelector(state => state.lastName.value);
  const token = useSelector(state => state.token.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const user = getLoginFetch(token);
    user.then(object => {
      dispatch(getFirstName(object.firstName));
      dispatch(getLastName(object.lastName));
    });
  }, [token, dispatch]);

  // Open Edit Section
  const showEditSection = e => {
    e.preventDefault();
    const editSection = document.querySelector(".edit-section");
    editSection.style.display = "block";
  };

  // Redirect to login page
  if (token === 0) return <Navigate to="/login" />;

  return (
    <div className="header">
      <h1>
        {title}
        <br />
        {firstName} {lastName}!
      </h1>
      <button className="edit-button" onClick={showEditSection}>
        Edit Name
      </button>
      <EditSection />
    </div>
  );
};

export default ProfileHeader;
