import { Fragment } from "react";
import { Alert, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./WelcomePage.module.css";

const WelcomePage = () => {
  const isToken = useSelector((state) => state.token.token);
  const email = localStorage.getItem("email");
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
          return res.json();
        }
      })
      .then((data) => {
        //name saved into context saved to context
        alert("Email sent successfully");
        console.log(data.email);
      });
  };

  var username = "";
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
      localStorage.setItem("name", data.users[0].displayName);
    });
  username = localStorage.getItem("name");
  return (
    <Fragment>
      <div>
        {isToken && <Alert variant="success">Welcome {email}</Alert>}
        {isToken && !username && (
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
        <h1>Welcome to Expense Tracker {username} </h1>
        {!isToken && (
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
        {isToken && (
          <Button variant="dark" onClick={verifyEmailHandler}>
            Click here to verify email
          </Button>
        )}
      </div>
    </Fragment>
  );
};

export default WelcomePage;
