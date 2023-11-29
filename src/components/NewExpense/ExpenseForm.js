import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [newExpenseData, setNewExpenseData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (event) => {
    setNewExpenseData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setNewExpenseData((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setNewExpenseData((prevState) => {
      return {
        ...prevState,
        date: new Date(event.target.value),
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.onSaveExpense(newExpenseData);

    setNewExpenseData({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newExpenseData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newExpenseData.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={newExpenseData.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
