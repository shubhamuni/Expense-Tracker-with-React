import { Fragment, useContext } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import authContext from "../../Store/AuthContext";
import classes from "./WelcomePage.module.css";

const WelcomePage = () => {
  const authCtx = useContext(authContext);
  const token = localStorage.getItem("token");
  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAZ58t-_MvVDQ3e_pDLaFu4YWhyu7Ix4Xc",
    {
      method: "POST",
      body: JSON.stringify({
        idToken: token, // For logging we require these keys
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    }
  });
  return (
    <Fragment>
      <div>
        {authCtx.isLoggedIn && (
          <Alert key="danger" variant="danger">
            Your Profile is Incomplete
            <Link
              to="/completeprofile"
              style={{
                textDecoration: "none",
                color: "#111",
              }}
            >
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
