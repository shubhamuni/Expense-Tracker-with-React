import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import authContext from "../../Store/AuthContext";

export const Header = () => {
  const authCtx = useContext(authContext);
  const login = authCtx.isLoggedIn;
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
        <Nav className="me-auto">
          {login && (
            <NavLink
              to="/expensepage"
              style={{
                textDecoration: "none",
                margin: "5px",
                color: "#f3f3f3",
              }}
            >
              Home
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/profile"
              style={{
                textDecoration: "none",
                margin: "5px",
                color: "#f3f3f3",
              }}
            >
              Profile
            </NavLink>
          )}
          {!login && (
            <NavLink
              to="/authform"
              style={{
                textDecoration: "none",
                marginLeft: "68rem",
                color: "#f3f3f3",
              }}
            >
              Login
            </NavLink>
          )}
          {login && (
            <Button
              to="/authform"
              style={{
                marginLeft: "60rem",
                backgroundColor: "gray",
                borderRadius: "20px",
              }}
              onClick={authCtx.logout}
              variant="dark"
            >
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
