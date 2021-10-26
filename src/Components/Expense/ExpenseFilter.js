import React from 'react'; //Not needed, its default behavior under the hood

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  
  const yearFilterChangeHandler = (event) => {
    props.onYearFilterChange(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearFilterChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;