import { Fragment, useContext } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import authContext from "../../Store/AuthContext";
import classes from "./WelcomePage.module.css";

const WelcomePage = () => {
  const authCtx = useContext(authContext);
  return (
    <Fragment>
      <div>
        {authCtx.isLoggedIn && (
          <Alert key="danger" variant="danger">
            Your Profile is Incomplete
            <Link
              to="/ completeprofile"
              style={{
                textDecoration: "none",
                color: "#111",
              }}
            >
              {" "}
              Please complete
            </Link>
          </Alert>
        )}
      </div>
      <div className={classes.title}>
        <h1>Welcome to My Expense Tracker</h1>
        {!authCtx.isLoggedIn && (
          <Link
            to="/authform"
            style={{
              textDecoration: "none",
              color: "#111",
            }}
          >
            Please Login or Create Account
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default WelcomePage;
