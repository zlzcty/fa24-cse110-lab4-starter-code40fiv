import { useState } from "react";

const EditBudget = (props: {
  budget: any;
  handleSaveClick: (arg0: any) => void;
}) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required
        type="number"
        className="form-control mr-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
