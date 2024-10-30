import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ExpenseTotal = () => {
  const expenses = useContext(AppContext);

  const totalExpenses = expenses.expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
