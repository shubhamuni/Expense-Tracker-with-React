import React, { useCallback, useEffect, useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensePage from "./ExpensePage";

const DisplayExpense = () => {
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);
  let email = localStorage.getItem("email");
  email = email.replace(/[^a-zA-Z0-9]/g, "");

  const fetchExpenseHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://react-api-8342e-default-rtdb.firebaseio.com/${email}.json`
      );

      const data = await response.json();

      const loadedExpenses = [];

      for (const key in data) {
        loadedExpenses.push({
          id: key,
          expenseamount: data[key].expenseamount,
          description: data[key].description,
          category: data[key].category,
        });
      }
      setExpense(loadedExpenses);
    } catch (error) {
      setError(error.message);
    }
  }, [email]);
  useEffect(() => {
    fetchExpenseHandler();
  }, [fetchExpenseHandler]);

  const addExpenseHandler = async (expense) => {
    const response = await fetch(
      `https://react-api-8342e-default-rtdb.firebaseio.com/${email}.json`,
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  let content = <p>Found no Expense.</p>;

  if (expense.length > 1) {
    content = <ExpenseList expenses={expense} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <React.Fragment>
      <section>
        <ExpensePage onAddExpense={addExpenseHandler} />
      </section>
      <section>
        <button onClick={fetchExpenseHandler}>View Expense </button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};
export default DisplayExpense;
