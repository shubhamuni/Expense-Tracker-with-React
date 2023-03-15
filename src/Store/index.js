import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth";
import LoginReducer from "./login";
import ThemeReducer from "./Themereducer";
const store = configureStore({
  reducer: { auth: AuthReducer, token: LoginReducer, theme: ThemeReducer },
});

export default store;
