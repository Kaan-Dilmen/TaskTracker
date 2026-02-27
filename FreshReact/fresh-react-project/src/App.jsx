import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (value.trim() === "") return;
    setTasks([...tasks, value]);
    setValue("");
  }

  return (
    <div className="container">
      <div className="box">
        {/*Main Header*/}
        <h1>Task Tracker 🚀</h1>

        {/*Input Field*/}
        <input
          className="input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a task"
        />

        {/*Add Button*/}
        <button className="button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>      

      <div className="listContainer">
        {/*List*/}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>    
  );
}

export default App;
