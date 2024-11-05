import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { fetchBudget, updateBudget } from "../../utils/budget-utils";

const Budget = () => {

  const { budget, setBudget } = useContext(AppContext);

  useEffect(() => {
    loadBudget();
  }, []);

  // Function to load budget and handle errors
  const loadBudget = async () => {
    try {
      const budgetNum = await fetchBudget();
      setBudget(budgetNum);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div>Budget: $
        <input
          placeholder="Budget"
          value={budget}
          onChange={(event) => {
            try {
                setBudget(Number(event.target.value));
                updateBudget(Number(event.target.value));
              } catch (err: any) {
                console.log(err.message);
              }}
            }>
        </input>
      </div>
    </div>
  );
};

export default Budget;
