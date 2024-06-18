import React, { useState } from "react";

function AddTask({ data, setData }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    let id = data.length ? data[data.length - 1].id + 1 : 1;
    let newList = {
      id,
      name,
      description,
      status: false,
    };
    let newArray = [...data];
    newArray.push(newList);
    setData(newArray);

    setName("");
    setDescription("");
    setStatus("");
  };

  return (
    <>
      <div className="input-group flex-nowrap headform">
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
        />
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </div>
    </>
  );
}

export default AddTask;
