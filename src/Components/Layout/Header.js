import { Fragment, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import authContext from "../../Store/AuthContext";

const Header = (props) => {
  const authCtx = useContext(authContext);
  const login = authCtx.isLoggedIn;
  return (
    <Fragment>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
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
                <button
                  to="/authform"
                  style={{
                    marginLeft: "60rem",
                    backgroundColor: "gray",
                    borderRadius: "20px",
                  }}
                  onClick={authCtx.logout}
                >
                  Logout
                </button>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Header;
