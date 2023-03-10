import { ListGroup } from "react-bootstrap";
import { Expense } from "./Expense";

const ExpenseList = (props) => {
  return (
    <ListGroup>
      {props.expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense.expense}
          description={expense.description}
          date={expense.date}
        />
      ))}
    </ListGroup>
  );
};

export default ExpenseList;
