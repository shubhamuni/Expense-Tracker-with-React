import React, { useCallback, useEffect, useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensePage from "./ExpensePage";

const DisplayExpense = () => {
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);

  const fetchExpenseHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://react-api-8342e-default-rtdb.firebaseio.com/expense.json`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedExpenses = [];

      for (const key in data) {
        loadedExpenses.push({
          id: key,
          expense: data[key].expense,
          description: data[key].description,
          date: data[key].date,
        });
      }

      setExpense(loadedExpenses);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchExpenseHandler();
  }, [fetchExpenseHandler]);

  async function addExpenseHandler(expense) {
    const response = await fetch(
      `https://react-api-8342e-default-rtdb.firebaseio.com/expense.json`,
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no Expense.</p>;

  if (expense.length > 0) {
    content = <ExpenseList expense={expense} />;
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
