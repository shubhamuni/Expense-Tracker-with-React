import React from "react";
import { Button, Table } from "react-bootstrap";

export const Expense = (props) => {
  return (
    <div className="m-5 p-1" style={{ width: "50rem" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Expense ₹</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.expenseamount}</td>
            <td>{props.description}</td>
            <td>{props.category}</td>
            <td>
              <Button variant="dark" onClick={props.deleteHandler}>
                Delete
              </Button>
            </td>
            <td>
              <Button variant="dark">Edit</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

//
