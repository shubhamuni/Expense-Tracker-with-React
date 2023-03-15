import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authAction } from "../../Store/Auth";
import { loginAction } from "../../Store/login";

export const Header = () => {
  const isToken = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(loginAction.removeToken(null));
    dispatch(authAction.logout());
    localStorage.removeItem("name");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="p-3">
      <Navbar.Brand>Expense Tracker</Navbar.Brand>
      <Nav className="me-auto">
        {isToken && (
          <NavLink
            to="/expensepage"
            style={{
              textDecoration: "none",
              paddingLeft: "15px",
              paddingTop: "5px",
              color: "#f3f3f3",
            }}
          >
            Home
          </NavLink>
        )}
        {isToken && (
          <NavLink
            to="/profile"
            style={{
              textDecoration: "none",
              paddingLeft: "15px",
              paddingTop: "5px",
              color: "#f3f3f3",
            }}
          >
            Edit Profile
          </NavLink>
        )}
        {!isToken && (
          <NavLink to="/authform">
            <Button
              style={{
                textDecoration: "none",
                marginLeft: "70rem",
                color: "#f3f3f3",
              }}
              variant="secondary"
            >
              Login
            </Button>
          </NavLink>
        )}
        {isToken && (
          <Button
            to="/"
            style={{
              marginLeft: "60rem",
              backgroundColor: "gray",
              borderRadius: "20px",
            }}
            onClick={logoutHandler}
            variant="dark"
          >
            Logout
          </Button>
        )}
      </Nav>
    </Navbar>
  );
};
