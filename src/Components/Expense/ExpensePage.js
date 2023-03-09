import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function ExpensePage() {
  return (
    <div>
      <Container>
        <Form
          style={{ width: "50rem", marginInline: "15rem", marginTop: "10rem" }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Expense ($)</Form.Label>
            <Form.Control type="number" placeholder="Enter Expense" />
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
      </Container>
    </div>
  );
}

export default ExpensePage;
