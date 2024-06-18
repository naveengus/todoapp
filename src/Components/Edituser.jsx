import React, { useState, useEffect } from "react";
import { findIndexById } from "./utils/Helper";

function Edituser({ data, setData, editTask, setEditTask }) {
  const [name, setName] = useState(editTask.name);
  const [description, setDescription] = useState(editTask.description);
  const [status, setStatus] = useState(editTask.status);

  const handleSubmit = () => {
    let index = findIndexById(data, editTask.id);
    if (index !== -1) {
      let editedData = { id: editTask.id, name, description, status: false };
      let newArray = [...data];
      newArray.splice(index, 1, editedData);
      setData(newArray);
      setEditTask(""); // Close the Edituser form
    } else {
      console.error(`Invalid Id: ${editTask.id}`);
    }
  };

  return (
    <>
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        <button
          type="button"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Edituser;
