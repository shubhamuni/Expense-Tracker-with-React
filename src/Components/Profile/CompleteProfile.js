import React, { Fragment, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import classes from "./CompleteProfile.module.css";

const CompleteProfile = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const fullNameInputRef = useRef();
  const profilePhotoInputRef = useRef();
  const name = localStorage.getItem("name");

  //Updating profile Details
  const submitHandler = () => {
    const enteredFullName = fullNameInputRef.current.value;
    const enteredprofileURL = profilePhotoInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAZ58t-_MvVDQ3e_pDLaFu4YWhyu7Ix4Xc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: enteredFullName,
          photoUrl: enteredprofileURL,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "/application.json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          history.replace("/");
        }
        if (!res.ok) {
          return res.json().then((data) => {
            let errorMessage = "Something went wrong";
            console.log(data);

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        alert("Sucess");
      });
  };
  return (
    <Fragment>
      <div className={classes.form}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name :</Form.Label>
            <Form.Control
              type="text"
              defaultValue={name}
              placeholder="Enter name"
              ref={fullNameInputRef}
              minLength={2}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Profile Photo URL :</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              ref={profilePhotoInputRef}
              minLength={2}
              required
            />
          </Form.Group>
          <Form.Group>
            <Button variant="dark" onClick={submitHandler}>
              Update
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Fragment>
  );
};

export default CompleteProfile;
