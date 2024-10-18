import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContextExpenses";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { expenses, setExpenses } = useContext(AppContext);

  console.log("expenses in AddExpenseForm", expenses);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newExpense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    setExpenses([...expenses, newExpense]);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
