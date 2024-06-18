import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import AddTask from "./Components/AddTask";
import Edituser from "./Components/Edituser";

function App() {
  let [data, setData] = useState([
    {
      id: 1,
      name: "Task name",
      description: "my first task is bla bla",
      status: true,
    },
    {
      id: 2,
      name: "Task 2 ",
      description: "say something about your code to this description ",
      status: false,
    },
    {
      id: 3,
      name: "Task 3 ",
      description: "say something about your code to this description ",
      status: true,
    },
  ]);

  const [editTask, setEditTask] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((task) => {
      if (filterStatus === "all") return true;
      if (filterStatus === "completed") return task.status === true;
      if (filterStatus === "notcompleted") return task.status === false;
      return true;
    });
    setFilteredData(filtered);
  }, [filterStatus, data]);

  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h2 className="heading">MY todo</h2>
        {editTask ? (
          <Edituser
            data={data}
            setData={setData}
            editTask={editTask}
            setEditTask={setEditTask}
          />
        ) : (
          <AddTask data={data} setData={setData} />
        )}

        <div className="topmenu">
          <h3>MY Todos</h3>
          <h6>Status Filter :</h6>
          <select
            className="status "
            name="filterStatus"
            value={filterStatus}
            onChange={handleFilter}
          >
            <option selected value="all">
              All
            </option>
            <option value="completed">Completed</option>
            <option value="notcompleted">Not Completed</option>
          </select>
        </div>

        <div className="card-boxes">
          {filteredData.map((e, i) => {
            return (
              <Card
                key={i}
                data={e}
                setData={setData}
                setEditTask={setEditTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
