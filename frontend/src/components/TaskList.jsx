import React from "react";

export default function TaskList({ tasks, onDone }) {
  return (
    <div>
      {tasks.length === 0 && <p>No tasks yet!</p>}
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <div className="task-title">{task.title}</div>
          <div>{task.description}</div>
          <button className="done-btn" onClick={() => onDone(index)}>Done</button>
        </div>
      ))}
    </div>
  );
}
