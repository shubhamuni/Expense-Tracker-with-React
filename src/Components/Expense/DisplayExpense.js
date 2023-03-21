import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import ExpensePage from "./ExpensePage";
import TotalExpense from "./TotalExpense";

const DisplayExpense = () => {
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let email = localStorage.getItem("email");
  email = email.replace(/[^a-zA-Z0-9]/g, "");

  const databaseURL = "https://react-api-8342e-default-rtdb.firebaseio.com";
  const fetchExpenseHandler = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(`${databaseURL}/${email}.json`);

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
    setLoading(false);
  };
  useEffect(() => {
    fetchExpenseHandler();
  }, []);
  const deleteHandler = (keyToDelete) => {
    // const keyToDelete = props.id;
    console.log("keyToDelete", keyToDelete);

    fetch(`${databaseURL}/${email}/${keyToDelete}.json`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        fetchExpenseHandler();
        console.log(`Node with key ${keyToDelete} deleted successfully.`);
      })
      .catch((error) => {
        console.error(`There was a problem deleting the node: ${error}`);
      });
  };

  const addExpenseHandler = async (expense) => {
    setLoading(true);
    const response = await fetch(`${databaseURL}/${email}.json`, {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
    fetchExpenseHandler();
  };

  let content = <p>Found no Expense.</p>;

  if (loading) {
    content = <p>Loading...</p>;
  }
  if (expense.length > 0) {
    content = (
      <div>
        <TotalExpense expenses={expense} />
        <ExpenseList
          expenses={expense}
          deleteHandler={(id) => deleteHandler(id)}
        />
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <React.Fragment>
      <NavLink className="text-decoration-none" to="/">
        Go back
      </NavLink>
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
