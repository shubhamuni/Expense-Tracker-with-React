import React from "react";

const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  displayName: (name) => {},
  verifyEmail: false,
  items: [],
  totalExpense: "",
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default authContext;
