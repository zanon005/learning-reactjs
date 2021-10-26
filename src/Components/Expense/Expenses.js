import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2021");

  const yearSelectedHandler = (newYearSelected) => {
    setYearSelected(newYearSelected);
  };

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
  ));

  let expensesList =  <h1 style={{color: 'blue', textAlign:"center"}}>No Expenses found, sorry xd</h1>;

  if(filteredExpenses.length > 0){
    expensesList = filteredExpenses;
  }

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
        { expensesList }
      </Card>
    </div>
  );
}

export default Expenses;
