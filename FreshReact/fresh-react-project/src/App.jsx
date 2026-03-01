import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editValue, setEditValue] = useState("");

  function handleAddTask() {
    if (value.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: value,
        completed: false,
        isEditing: false,
      },
    ]);

    setValue("");
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleEditing(id) {
    const taskToEdit = tasks.find((task) => task.id === id);

    if (!taskToEdit.isEditing) {
      setEditValue(taskToEdit.text);
    }

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task,
      ),
    );
  }

  function handleSave(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editValue, isEditing: false } : task,
      ),
    );
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
          {tasks.map((task) => (
            <li key={task.id}>
              {task.isEditing ? (
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                task.text
              )}
              {/*Mark Complete Button*/}
              <button
                className={task.completed ? "completed" : "button"}
                onClick={() => handleCompleted(task.id)}
              >
                Mark Complete
              </button>
              {/*Delete Button*/}
              <button className="button" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
              {/* Edit / Save Button */}
              {task.isEditing ? (
                <button className="button" onClick={() => handleSave(task.id)}>
                  Save Task
                </button>
              ) : (
                <button
                  className="button"
                  onClick={() => handleEditing(task.id)}
                >
                  Edit Task
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
