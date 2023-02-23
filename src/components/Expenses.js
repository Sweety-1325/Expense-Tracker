import React,{useState} from 'react';

// import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpensesChart from './NewExpense/ExpensesChart';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import ExpensesList from './NewExpense/ExpensesList';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      
      
      
    </Card>
    </div>
  );
};

export default Expenses;