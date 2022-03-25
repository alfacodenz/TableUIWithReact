// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// fake db
import data from "./data/data.json";

// react hooks
import { Fragment, useState } from "react";

// components
import { ReadOnlyRows } from "./components/ReadOnlyRows";
import { EditRows } from "./components/EditRows";
import { Pagination } from "./components/Pagination";
import { ModalForm } from "./components/ModalForm";

function App() {
  // make better data
  const betterData = data.map((item) => {
    return { ...item, id: Math.floor(Math.random() * 10000000000) };
  });

  // employees state

  const [employees, setEmployees] = useState(betterData);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);

  // order
  const [order, setOrder] = useState("ASC");

  // row id
  const [rowID, setRowID] = useState(null);

  // modal form
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // edit form field
  const [editedField, setEditedField] = useState({
    name: "",
    age: "",
    office: "",
    position: "",
    salary: "",
    startDate: "",
  });

  // modal form
  const [modalField, setModalField] = useState({
    name: "",
    age: "",
    office: "",
    position: "",
    salary: "",
    startDate: "",
  });

  // change page
  const changePage = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  // pagination
  const indexOfLastItem = currentPage * employeesPerPage; // 10
  const indexOfFirstItem = indexOfLastItem - employeesPerPage; // 0
  const displayEmyployees = employees.slice(indexOfFirstItem, indexOfLastItem); // 10 items per page

  // sorting
  const getSorting = (col) => {
    if (order === "ASC") {
      const sorted = [...employees].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setEmployees(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...employees].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setEmployees(sorted);
      setOrder("ASC");
    }
  };

  // edit form change
  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newInputFieldData = { ...editedField };
    newInputFieldData[fieldName] = fieldValue;

    setEditedField(newInputFieldData);
    console.log(newInputFieldData);
  };

  // edit form submit

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: rowID,
      name: editedField.name,
      age: editedField.age,
      office: editedField.office,
      position: editedField.position,
      salary: editedField.salary,
      startDate: editedField.startDate,
    };

    const newEmployees = [...employees];

    const index = newEmployees.findIndex((employee) => employee.id === rowID);

    newEmployees[index] = newEmployee;
    setEmployees(newEmployees);

    setRowID(null);
  };

  // modal change
  const handleModalChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newInputFieldData = { ...modalField };
    newInputFieldData[fieldName] = fieldValue;

    setModalField(newInputFieldData);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Math.floor(Math.random() * 10000000),
      name: modalField.name,
      age: modalField.age,
      office: modalField.office,
      position: modalField.position,
      salary: modalField.salary,
      startDate: modalField.startDate,
    };

    // console.log(newEmployee);

    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);

    setModalIsOpen(false);
  };

  // edit row
  const handleEditRow = (e, employee) => {
    e.preventDefault();
    setRowID(employee.id);

    const values = {
      name: employee.name,
      age: employee.age,
      office: employee.office,
      position: employee.position,
      salary: employee.salary,
      startDate: employee.startDate,
    };

    setEditedField(values);
  };

  // cancel click
  const handleCancel = () => {
    rowID(null);
  };

  // delete
  const handleDelete = (rowID) => {
    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === rowID);

    newEmployees.splice(index, 1);

    setEmployees(newEmployees);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-1 text-center my-5 text-primary">Hello table</h1>
        <button
          className="btn btn-primary btn-circle btn-lg mx-3"
          onClick={() => setModalIsOpen(true)}>
          +
        </button>
        <span>Add employees</span>
      </div>
      <div className="container my-5">
        <form onSubmit={(e) => handleEditSubmit(e)}>
          <table className="table table-bordered table-striped table-responsive text-center">
            <thead>
              <tr>
                <th onClick={() => getSorting("name")}>Name</th>
                <th onClick={() => getSorting("age")}>Age</th>
                <th onClick={() => getSorting("office")}>Office</th>
                <th onClick={() => getSorting("position")}>Position</th>
                <th onClick={() => getSorting("salary")}>Salary</th>
                <th onClick={() => getSorting("startDate")}>Start Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayEmyployees.map((employee) => {
                return (
                  <Fragment key={employee.id}>
                    {rowID === employee.id ? (
                      <EditRows
                        employee={employee}
                        handleFormChange={handleFormChange}
                        editedField={editedField}
                      />
                    ) : (
                      <ReadOnlyRows
                        employee={employee}
                        handleEditRow={handleEditRow}
                        handleCancel={handleCancel}
                        handleDelete={handleDelete}
                      />
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </form>

        <Pagination
          totalEmployees={employees.length}
          employeesPerPage={employeesPerPage}
          changePage={changePage}
        />

        {modalIsOpen && (
          <ModalForm
            setModalIsOpen={setModalIsOpen}
            handleModalChange={handleModalChange}
            handleModalSubmit={handleModalSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
