import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

export default function ExpensesList(props){

  if (props.items.length === 0){
    return (
      <h1 className="expenses-list__fallback" style={{color: 'blue', textAlign:"center"}}>
        No Expenses found
      </h1>
    )
  }

  return (
    <ul className="expenses-list">
      {
        props.items.map( (expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </ul>
  );
}