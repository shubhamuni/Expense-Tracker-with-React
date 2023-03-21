import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { CSVLink } from "react-csv";
import { useDispatch } from "react-redux";
import { themeAction } from "../../Store/Themereducer";

const TotalExpense = (props) => {
  const dispatch = useDispatch();
  const [totalExpense, setTotalExpense] = useState(0);
  const [csvData, setCsvData] = useState([]);

  const generateCsvData = async () => {
    const headers = [
      { label: "Category", key: "Category" },
      { label: "Description", key: "description" },
      { label: "Amount", key: "amount" },
    ];
    const data = props.expenses.map((expense) => ({
      amount: expense.expenseamount,
      description: expense.description,
      category: expense.category,
    }));
    setCsvData([...headers, ...data]);
  };

  function calculateTotalExpense() {
    let total = 0;
    props.expenses.forEach((expense) => {
      total += Number(expense.expenseamount);
    });
    console.log(total);
    return total;
  }

  useEffect(() => {
    setTotalExpense(calculateTotalExpense());
  }, []);

  const themeHandler = () => {
    dispatch(themeAction.themeReducer("dark"));
  };
  return (
    <div className="p-3 align-items-center">
      <Table striped bordered hover>
        {totalExpense > 10000 && <h2>For expense above 10,000₹</h2>}
        <tbody>
          <tr>
            <td>Total Expense: ₹{totalExpense}</td>
            <td>
              {totalExpense > 10000 ? (
                <Button variant="dark" onClick={themeHandler}>
                  Activate Premium
                </Button>
              ) : (
                ""
              )}
            </td>
            <td>
              {totalExpense > 10000 && (
                <Button onClick={generateCsvData} variant="dark">
                  Generate Expense
                </Button>
              )}
            </td>
            <td>
              {totalExpense > 10000 && (
                <CSVLink
                  data={csvData}
                  filename={"expense-list.csv"}
                  style={{ color: "black" }}
                >
                  Download CSV
                </CSVLink>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TotalExpense;
