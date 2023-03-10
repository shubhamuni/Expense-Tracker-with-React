import React, { Fragment, useContext, useRef } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import authContext from "../../Store/AuthContext";

export const Profile = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(authContext);
  const history = useHistory();

  const submitHandler = () => {
    const enteredPassword = passwordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAZ58t-_MvVDQ3e_pDLaFu4YWhyu7Ix4Xc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "/application.json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          history.replace("/profile");
        }
        if (!res.ok) {
          throw new Error("Enter correct to Change password");
        }
      })
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Fragment>
      <Link className="m-2 text-decoration-none" to="/completeprofile">
        Edit Profile
      </Link>
      <Container style={{ marginTop: "10rem", width: "30rem" }}>
        <h3 style={{ marginBottom: "20px" }}>Change password</h3>
        <FloatingLabel controlId="floatingPassword" label="Enter New Password">
          <Form.Control
            type="password"
            minLength={7}
            placeholder="New Password"
            ref={passwordInputRef}
          />
        </FloatingLabel>
        <Button className="m-3" variant="dark" onClick={submitHandler}>
          Submit
        </Button>
      </Container>
    </Fragment>
  );
};
