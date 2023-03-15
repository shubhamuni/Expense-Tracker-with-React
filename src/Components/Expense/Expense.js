import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const Expense = (props) => {
  return (
    <div style={{ width: "50rem" }}>
      <ListGroup.Item>Expense $: {props.expenseamount}</ListGroup.Item>
      <ListGroup.Item>Description: {props.description}</ListGroup.Item>
      <ListGroup.Item>Category: {props.category}</ListGroup.Item>
      <Button variant="secondary" className="m-2">
        Edit
      </Button>
      <Button variant="dark" onClick={props.deleteHandler}>
        Delete
      </Button>
    </div>
  );
};
