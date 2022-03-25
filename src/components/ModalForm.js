import "./ModalForm.css";

export const ModalForm = ({
  setModalIsOpen,
  handleModalChange,
  handleModalSubmit,
}) => {
  return (
    <div className="modal-container bg-dark">
      <div className="container py-5">
        <button
          className="btn btn-primary my-5"
          onClick={() => setModalIsOpen(false)}>
          x
        </button>
      </div>
      <h1 className="display-3 text-center text-primary">Add employee</h1>

      <form onSubmit={(e) => handleModalSubmit(e)}>
        <div className="form-group container">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            onChange={(e) => handleModalChange(e)}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Enter age"
            onChange={(e) => handleModalChange(e)}
          />

          <label>Office</label>
          <input
            type="text"
            name="office"
            className="form-control"
            placeholder="Enter office"
            onChange={(e) => handleModalChange(e)}
          />

          <label>Position</label>
          <input
            type="text"
            name="position"
            className="form-control"
            placeholder="Enter position"
            onChange={(e) => handleModalChange(e)}
          />

          <label>Salary</label>
          <input
            type="number"
            name="salary"
            className="form-control"
            placeholder="Enter salary"
            onChange={(e) => handleModalChange(e)}
          />

          <label>Start date</label>
          <input
            type="date"
            name="startDate"
            className="form-control"
            onChange={(e) => handleModalChange(e)}
          />
          <div className="form-text">select start date</div>

          <button className="btn btn-primary my-5">Sumbit</button>
        </div>
      </form>
    </div>
  );
};
