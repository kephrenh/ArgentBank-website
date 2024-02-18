import { getLoginData, getLoginFetchData, saveUserProfileData } from "./apiData.js";

// Get Login
export const getLogin = async credentials => {
  const API_URL = "http://localhost:3001/api/v1/user/login";

  const loginResponse = await fetch(API_URL, {
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).then(response => response.json());
  // console.clear();
  return await getLoginData(loginResponse);
};

// Check if user is connected
export const getLoginFetch = async token => {
  const API_URL = "http://localhost:3001/api/v1/user/profile";

  const loginFetchResponse = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    method: "POST",
  }).then(response => response.json());

  // console.clear();
  return await getLoginFetchData(loginFetchResponse);
};

// Save new name
export const saveUserProfile = async (token, fullName) => {
  const API_URL = "http://localhost:3001/api/v1/user/profile";

  const saveUserProfileResponse = await fetch(API_URL, {
    body: JSON.stringify(fullName),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
    method: "PUT",
  }).then(response => response.json());
  // console.clear();
  return await saveUserProfileData(saveUserProfileResponse);
};
