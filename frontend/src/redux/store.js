import { configureStore } from "@reduxjs/toolkit";
import firstNameReducer from "../features/firstNameSlice.js";
import lastNameReducer from "../features/lastNameSlice.js";
import tokenReducer from "../features/tokenSlice.js";

const store = configureStore({
  reducer: {
    firstName: firstNameReducer,
    lastName: lastNameReducer,
    token: tokenReducer,
  },
});

export default store;
