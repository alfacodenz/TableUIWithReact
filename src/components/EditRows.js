import React from "react";

export const EditRows = ({ handleFormChange, editedField, handleCancel }) => {
  // console.log(editedField);
  return (
    <tr>
      <td>
        <input
          type="text"
          value={editedField.name}
          required
          name="name"
          onChange={(e) => handleFormChange(e)}
        />
      </td>
      <td>
        <input
          type="text"
          value={editedField.age}
          required
          name="age"
          onChange={(e) => handleFormChange(e)}
        />
      </td>
      <td>
        <input
          type="text"
          value={editedField.office}
          required
          name="office"
          onChange={(e) => handleFormChange(e)}
        />
      </td>
      <td>
        <input
          type="text"
          value={editedField.position}
          required
          name="position"
          onChange={(e) => handleFormChange(e)}
        />
      </td>
      <td>
        <input
          type="text"
          value={editedField.salary}
          required
          name="salary"
          onChange={(e) => handleFormChange(e)}
        />
      </td>
      <td>
        <input
          type="text"
          required
          value={editedField.startDate}
          name="startDate"
          onChange={(e) => handleFormChange(e)}
        />
      </td>
      <td>
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-danger" onClick={handleCancel}>
          x
        </button>
      </td>
    </tr>
  );
};
