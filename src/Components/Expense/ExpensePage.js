import Form from "react-bootstrap/Form";

function ExpensePage() {
  return (
    <Form style={{ width: "50rem", margin: "15rem" }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Expense ($)</Form.Label>
        <Form.Control type="number" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Describe</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Describe your expense is for..."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
    </Form>
  );
}

export default ExpensePage;
