import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
