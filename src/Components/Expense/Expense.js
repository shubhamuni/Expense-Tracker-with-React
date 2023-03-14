import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const Expense = (props) => {
  const databaseURL = "https://react-api-8342e-default-rtdb.firebaseio.com";
  let email = localStorage.getItem("email");
  email = email.replace(/[^a-zA-Z0-9]/g, "");

  const deleteHandler = () => {
    const keyToDelete = props.id;
    fetch(`${databaseURL}/${email}/${keyToDelete}.json`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`Node with key ${keyToDelete} deleted successfully.`);
      })
      .catch((error) => {
        console.error(`There was a problem deleting the node: ${error}`);
      });
  };
  return (
    <div style={{ width: "50rem" }}>
      <ListGroup.Item>Expense $: {props.expenseamount}</ListGroup.Item>
      <ListGroup.Item>Description: {props.description}</ListGroup.Item>
      <ListGroup.Item>Category: {props.category}</ListGroup.Item>
      <Button variant="secondary" className="m-2">
        Edit
      </Button>
      <Button variant="dark" onClick={deleteHandler}>
        Delete
      </Button>
    </div>
  );
};
