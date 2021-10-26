import Expenses from "./Components/Expense/Expenses"
import NewExpense from "./Components/NewExpense/NewExpense";

import React, {useState} from "react";

const default_expenses = [
  {id: 'e1',title: 'Toilet Paper',      amount: 94.12,    date: new Date('2020-1-6 00:00')},
  {id: 'e2',title: 'New TV',            amount: 799.49,   date: new Date('2021-5-11 00:00')},
  {id: 'e3',title: 'Car Insurance',     amount: 294.67,   date: new Date('2021-3-10 00:00')},
  {id: 'e4',title: 'New Desk (Wooden)', amount: 450,      date: new Date('2021-7-24 00:00')},
  {id: 'e5',title: 'Thing 1',           amount: 5,        date: new Date('2019-8-19 00:00')},
  {id: 'e6',title: 'Papai noel',        amount: 299,      date: new Date('2022-12-24 00:00')}
];

function App() {
  const [expenses, setExpenses] = useState(default_expenses);

  const addExpenseHandler = (newExpense) => {
    console.log("In App.js");
    console.log(newExpense);
    setExpenses( prevExpenses => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;