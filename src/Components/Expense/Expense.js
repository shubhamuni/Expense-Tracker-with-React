import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const Expense = (props) => {
  return (
    <ListGroup>
      <ListGroup.Item>Expense $: {props.expenseamount}</ListGroup.Item>
      <ListGroup.Item>Description: {props.description}</ListGroup.Item>
      <ListGroup.Item>Category: {props.category}</ListGroup.Item>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </ListGroup>
  );
};
