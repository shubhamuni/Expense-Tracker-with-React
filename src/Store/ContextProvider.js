import { useState } from "react";
import authContext from "./AuthContext";

const CartProvider = (props) => {
  const localtoken = localStorage.getItem("token");
  const [token, setToken] = useState(localtoken);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(true);
  };
  const displayNameHandler = (name) => {
    localStorage.setItem("name", name);
  };
  const logoutHandler = (token) => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken(null);
  };
  const context = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    displayName: displayNameHandler,
  };
  return (
    <authContext.Provider value={context}>
      {props.children}
    </authContext.Provider>
  );
};

export default CartProvider;
