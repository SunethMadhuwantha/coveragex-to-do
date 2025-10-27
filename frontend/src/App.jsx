import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks].slice(0, 5)); // only latest 5 tasks
  };

  const markDone = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Add Task</h2>
        <TaskForm onAdd={addTask} />
      </div>
      <div className="card">
        <h2>Latest Tasks</h2>
        <TaskList tasks={tasks} onDone={markDone} />
      </div>
    </div>
  );
}

export default App;
