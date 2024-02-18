import React from "react";

const ProfileHeader = ({ title, firstName, lastName }) => {
  return (
    <div className="header">
      <h1>
        {title}
        <br />
        {firstName} {lastName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default ProfileHeader;
