import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Papter",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2022, 2, 12)
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 364.67,
    date: new Date(2021, 3, 28)
  }

];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
