import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            date={el.date}
            amount={el.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
