const ViewBudget = (props: { budget: number; handleEditClick: () => void }) => {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <div>Budget: ${props.budget}</div>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.handleEditClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ViewBudget;
