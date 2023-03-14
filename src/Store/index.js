import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth";

const store = configureStore({
  reducer: AuthReducer,
});

export default store;
