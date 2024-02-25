/* Get Login Data */

export function getLoginData(data) {
  if (data.status !== 400) {
    const object = {
      status: data.status,
      message: data.message,
      token: data.body.token,
    };
    return object;
  } else {
    const object = {
      status: data.status,
      message: data.message,
    };
    return object;
  }
}

/* Get Login Fetch */
export function getLoginFetchData(data) {
  if (data.body !== undefined) {
    const object = {
      status: data.status,
      email: data.body.email,
      firstName: data.body.firstName,
      lastName: data.body.lastName,
      userName: data.body.userName,
    };

    return object;
  } else {
    const object = {
      status: 0,
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
    };
    return object;
  }
}

/* Save User Profile Data */
export function saveUserProfileData(data) {
  const object = {
    status: data.status,
    message: data.message,
  };
  return object;
}
