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
    <ListGroup>
      <ListGroup.Item>Expense $: {props.expenseamount}</ListGroup.Item>
      <ListGroup.Item>Description: {props.description}</ListGroup.Item>
      <ListGroup.Item>Category: {props.category}</ListGroup.Item>
      <Button>Edit</Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </ListGroup>
  );
};
