import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CSVDownload, CSVLink } from "react-csv";
import { useDispatch } from "react-redux";
import { themeAction } from "../../Store/Themereducer";

const TotalExpense = (props) => {
  const dispatch = useDispatch();
  const [totalExpense, setTotalExpense] = useState(0);
  const [csvData, setCsvData] = useState([]);
  const generateCsvData = () => {
    const headers = [
      { label: "ID", key: "id" },
      { label: "Category", key: "Category" },
      { label: "Description", key: "description" },
      { label: "Amount", key: "amount" },
    ];
    const data = props.expenses.map((expense) => ({
      id: expense.id,
      amount: expense.expenseamount,
      description: expense.description,
      category: expense.category,
    }));
    setCsvData([headers, data]);
    console.log(csvData);
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
      Total Expense: ${totalExpense}
      {totalExpense > 10000 ? (
        <Button className="m-3" variant="dark" onClick={themeHandler}>
          Activate Premium
        </Button>
      ) : (
        ""
      )}
      {totalExpense > 10000 && (
        <Button onClick={generateCsvData}>Download</Button>
      )}
      {totalExpense > 10000 && (
        <CSVLink data={csvData} filename={"expense-list.csv"}>
          Download CSV
        </CSVLink>
      )}
    </div>
  );
};

export default TotalExpense;
