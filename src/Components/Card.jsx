import React from "react";
import { findIndexById } from "./utils/Helper";
function Card({ data, setData, setEditTask }) {
  const handleDelete = (id) => {
    setData((prevData) => {
      let index = findIndexById(prevData, id);
      if (index !== -1) {
        let newArray = [...prevData];
        newArray.splice(index, 1);
        return newArray;
      } else {
        console.error("Invalid id:" + id);
        return prevData;
      }
    });
  };

  const handleStaus = (id, newStatus) => {
    setData((prevData) => {
      let index = findIndexById(prevData, id);
      if (index !== -1) {
        let newArray = [...prevData];
        newArray[index] = {
          ...newArray[index],
          status: newStatus === "completed",
        };
        return newArray;
      } else {
        console.error("Invalid id:" + id);
        return prevData;
      }
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h6>
            <b>Name :</b> {data.name}
          </h6>
          <br></br>
          <h6>
            <b>Description : </b> {data.description}
          </h6>
          <br></br>
          <span className="statusHead">
            <b>Status :</b>
          </span>
          <select
            className={`status ${
              data.status ? "select-completed" : "select-notcompleted"
            }`}
            name="cardStatus"
            value={data.status ? "completed" : "notcompleted"}
            onChange={(e) => handleStaus(data.id, e.target.value)}
          >
            <option value="completed">Completed</option>
            <option value="notcompleted">Not Completed</option>
          </select>
          <br></br>
          <button
            className="btn btn-success cardBtn"
            onClick={() => {
              setEditTask(data);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger cardBtn"
            onClick={() => {
              handleDelete(data.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
