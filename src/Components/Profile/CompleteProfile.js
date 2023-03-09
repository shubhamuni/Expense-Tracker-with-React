import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import authContext from "../../Store/AuthContext";
import classes from "./CompleteProfile.module.css";

const CompleteProfile = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const fullNameInputRef = useRef();
  const profilePhotoInputRef = useRef();

  const photo = null;
  const submitHandler = () => {
    const enteredFullName = fullNameInputRef.current.value;
    const enteredprofileURL = profilePhotoInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=key=AIzaSyAZ58t-_MvVDQ3e_pDLaFu4YWhyu7Ix4Xc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: enteredFullName,
          photoUrl: enteredprofileURL,
          deleteAttribute: ["PHOTO_URL"],
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
    <div className={classes.form}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Full Name Please"
            ref={fullNameInputRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Profile Photo URL :</Form.Label>
          <Form.Control as="textarea" rows={3} ref={profilePhotoInputRef} />
        </Form.Group>
        <Form.Group>
          <Button variant="dark" onClick={submitHandler}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CompleteProfile;
