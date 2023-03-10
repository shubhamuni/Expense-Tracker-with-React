import { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function ExpensePage(props) {
  const expenseInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();
  const addExpenseHandler = () => {
    const expense = {
      expense: expenseInputRef.current.value,
      description: descriptionInputRef.current.value,
      date: dateInputRef.current.value,
    };

    props.onAddExpense(expense);
  };
  return (
    <div>
      <Container>
        <Form
          style={{ width: "50rem", marginInline: "15rem", marginTop: "10rem" }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Expense ($)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Expense"
              ref={expenseInputRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Describe</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe your expense is for..."
              ref={descriptionInputRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" ref={dateInputRef} />
          </Form.Group>
          <Button onClick={addExpenseHandler} variant="dark">
            Add Expense
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ExpensePage;
