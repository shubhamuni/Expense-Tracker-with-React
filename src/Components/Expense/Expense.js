import React from "react";
import { ListGroup } from "react-bootstrap";

export const Expense = (props) => {
  return (
    <ListGroup>
      {props.expense}
      <ListGroup.Item>{props.description}</ListGroup.Item>
      <ListGroup.Item>{props.date}</ListGroup.Item>
    </ListGroup>
  );
};
