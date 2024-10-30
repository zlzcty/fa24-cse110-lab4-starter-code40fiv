import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Expense } from "../../types/types";
import { useEffect } from "react";
import { fetchExpenses } from "../../utils/expense-utils";

const ExpenseList = () => {
  const { expenses, setExpenses } = useContext(AppContext);

  useEffect(() => {
    loadExpenses();
  }, []);

  // Function to load expenses and handle errors
  const loadExpenses = async () => {
    try {
      const expenseList = await fetchExpenses();
      setExpenses(expenseList);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <ul className="list-group">
      {expenses.map((expense: Expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
