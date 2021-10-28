import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  //Unique and independant state for each form value
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /**
   *  Use this logic for updating states when you need the previous
   * state to make a update the current state. 
  const titleChangeHandler = (event) => {
    setEnteredTitle( (prevState) => {
      return {...prevState, enteredTitle: event.target.value}
    })
  };
   */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  

  const submitHandler = (event) => {
    console.log("SubmitHandler executed")
    //  Prevent default behavior of the browser onSubmit, that forces 
    // the page to reload onSubmit.
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    //When we submit the new expense, close the expense form
    props.onCancelbtnPress();
  };
  
  //  This two-way binding looks like a loop but isnt, on change calls 
  // titleChangeHandler, that updates the state with the user input
  // and at the same time updates the dom value

  //    onSubmit default browser event behavior on click of buttons with 
  // ,specialy type 'submit', that are inside the <form /> html tag

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}          // two-way binding
            onChange={titleChangeHandler} // two-way binding
          />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" 
            value={enteredDate} 
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelbtnPress}>Cancel</button>
        <button type="submit">Add new Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
