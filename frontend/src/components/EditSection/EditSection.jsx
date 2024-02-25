import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../features/userNameSlice";
import { getLoginFetch, saveUserProfile } from "../../services/api";
import "./EditSection.css";

const EditSection = () => {
  // Use State
  const [newUserName, setNewUserName] = useState("");

  // Use Dispatch
  const dispatch = useDispatch();

  // First Name et Last Name
  const firstName = useSelector(state => state.firstName.value);
  const lastName = useSelector(state => state.lastName.value);
  const userName = useSelector(state => state.userName.value);

  // Token
  const token = useSelector(state => state.token.value);

  useEffect(() => {
    const user = getLoginFetch(token);
    user.then(object => {
      dispatch(getUserName(object.userName));
    });
  }, [token, dispatch]);

  // Fermer section Edit
  const hideEditSection = e => {
    e.preventDefault();
    const editSection = document.querySelector(".edit-section");
    const userName = document.getElementById("userName");
    editSection.style.display = "none";
    userName.value = "";
  };

  // Handle New User
  const handleNewUserName = e => {
    setNewUserName(e.target.value);
  };

  // Handle Edit Save
  const handleEditSave = e => {
    e.preventDefault();
    const editSection = document.querySelector(".edit-section");
    editSection.style.display = "none";
    dispatch(getUserName(newUserName));
    const userName = { userName: newUserName };
    const userNameInput = document.getElementById("userName");
    userNameInput.value = "";

    saveUserProfile(token, userName);
  };

  return (
    <>
      <div className="edit-section">
        <h2 className="edit-section-title">Edit user info</h2>
        <form className="edit-form" name="edit">
          <div className="profile-input-wrapper">
            <label className="edit-label" htmlFor="userName">
              User name:{" "}
            </label>
            <input
              className="edit-input"
              id="userName"
              type="text"
              placeholder={userName}
              onChange={handleNewUserName}
            />
          </div>
          <div className="profile-input-wrapper">
            <label className="edit-label" htmlFor="firstName">
              First name:{" "}
            </label>
            <input
              className="edit-input"
              id="firstName"
              type="text"
              placeholder={firstName}
              readOnly
            />
          </div>
          <div className="profile-input-wrapper">
            <label className="edit-label" htmlFor="lastName">
              Last name:{" "}
            </label>
            <input
              className="edit-input"
              id="lastName"
              type="text"
              placeholder={lastName}
              readOnly
            />
          </div>
        </form>
        <div className="buttons-section">
          <button className="button" type="submit" id="saveButton" onClick={handleEditSave}>
            Save
          </button>
          <button className="button" type="button" id="cancelButton" onClick={hideEditSection}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EditSection;
