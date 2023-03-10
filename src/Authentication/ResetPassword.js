import React, { useRef, useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

const ResetPassword = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const emailInputRef = useRef();

  const resetPasswordHandler = async () => {
    const enteredemail = emailInputRef.current.value;
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAZ58t-_MvVDQ3e_pDLaFu4YWhyu7Ix4Xc",
      {
        method: "POST",
        body: JSON.stringify({
          returnType: "PASSWORD_RESET",
          email: enteredemail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <Button onClick={handleShow} variant="dark">
          Reset password
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recover Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter Email :</Modal.Body>
        <Modal.Body>
          <FormControl
            type="email"
            placeholder="Enter email to send verification link"
            ref={emailInputRef}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={resetPasswordHandler}>
            Send verification Link
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResetPassword;
