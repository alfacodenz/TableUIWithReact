import React from "react";

export const ReadOnlyRows = ({ employee, handleEditRow, handleDelete }) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.office}</td>
      <td>{employee.position}</td>
      <td>{employee.salary}</td>
      <td>{employee.startDate}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={(e) => handleEditRow(e, employee)}>
          Edit
        </button>

        <button
          className="btn btn-danger mx-2"
          onClick={() => handleDelete(employee.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
