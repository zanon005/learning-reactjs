import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React, { useState } from "react";

function NewExpense(props){
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const showNewExpenseFormHandler = (event) => {
    setShowNewExpenseForm(true)
  }
  
  const hideNewExpenseFormHandler = (event) => {
    setShowNewExpenseForm(false)
  }

  return (
    <div className="new-expense">
      {!showNewExpenseForm && <button onClick={showNewExpenseFormHandler}>Add new Expense</button>}
      {showNewExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelbtnPress={hideNewExpenseFormHandler}/>}
    </div>
  );
}

export default NewExpense;