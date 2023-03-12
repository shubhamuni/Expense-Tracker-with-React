import { ListGroup } from "react-bootstrap";
import { Expense } from "./Expense";

const ExpenseList = (props) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        {props.expenses.map((expense) => (
          <Expense
            key={expense.id}
            expenseamount={expense.expenseamount}
            description={expense.description}
            category={expense.category}
          />
        ))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ExpenseList;
