import { useContext } from "react";
import { Expense } from "../../types/types";
import { AppContext } from "../../context/AppContextExpenses";

const ExpenseItem = (currentExpense: Expense) => {
  const { expenses, setExpenses } = useContext(AppContext);

  const handleDeleteExpense = (currentExpense: Expense) => {
    const updatedExpensesList = expenses.filter(
      (expense) => expense.id !== currentExpense.id
    );
    setExpenses(updatedExpensesList);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.name}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
