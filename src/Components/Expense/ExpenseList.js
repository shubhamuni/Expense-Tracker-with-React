import { ListGroup } from "react-bootstrap";
import { Expense } from "./Expense";

const ExpenseList = (props) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        {props.expenses.map((expense) => (
          <Expense
            key={expense.id}
            id={expense.id}
            expenseamount={expense.expenseamount}
            description={expense.description}
            category={expense.category}
            deleteHandler={() => props.deleteHandler(expense.id)}
          />
        ))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ExpenseList;
