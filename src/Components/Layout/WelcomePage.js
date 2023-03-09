import { Fragment, useContext } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import authContext from "../../Store/AuthContext";
import classes from "./WelcomePage.module.css";

const WelcomePage = () => {
  const authCtx = useContext(authContext);
  const token = localStorage.getItem("token");
  const key = "AIzaSyAZ58t-_MvVDQ3e_pDLaFu4YWhyu7Ix4Xc";
  const verifyEmailHandler = () => {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${key}`,
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("sucess");
          authCtx.verifyEmail(true);
          return res.json();
        }
      })
      .then((data) => {
        //name saved into context saved to context
      });
  };

  if (!authCtx.displayName) {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${key}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token, // For logging we require these keys
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        //name saved into context saved to context
        authCtx.displayName(data.users[0].displayName);
      });
  }
  const name = localStorage.getItem("name");
  return (
    <Fragment>
      <div>
        {authCtx.isLoggedIn && !name && (
          <Alert key="danger" variant="danger">
            Your Profile is Incomplete....
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
        <h1>Welcome to Expense Tracker {name}</h1>
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
        {!authCtx.verifyEmail && (
          <Button variant="dark" onClick={verifyEmailHandler}>
            Click here to verify email
          </Button>
        )}
      </div>
    </Fragment>
  );
};

export default WelcomePage;
