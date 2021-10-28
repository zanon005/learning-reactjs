import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2021");

  const yearSelectedHandler = (newYearSelected) => {
    setYearSelected(newYearSelected);
  };

  /* Solution using reduce function
  const filteredExpenses = props.items.reduce( function(filteredExpenses, expense){
    if(expense.date.getFullYear().toString() === yearSelected){
      filteredExpenses.push(expense);
    }
    return filteredExpenses;
  }, []).map( (expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));*/

  const filteredExpenses = props.items.filter( (expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelected}
          onYearFilterChange={yearSelectedHandler}
        />
        <h1 style={{ color: "white", textAlign: "center" }}>
          This is the list of Expenses
        </h1>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
