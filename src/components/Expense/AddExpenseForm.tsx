import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
const AddExpenseForm = () => {
	// Exercise: Consume the AppContext here

	const { expenses, setExpenses } = useContext(AppContext)

	// Exercise: Create name and cost to state variables
	const [name, setName] = useState("");
	const [cost, setCost] = useState("");

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}

	const handleCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCost(event.target.value)
	}

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Exercise: Add add new expense to expenses context array
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
						onChange={handleNameChange}
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
						onChange={handleCostChange}
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
