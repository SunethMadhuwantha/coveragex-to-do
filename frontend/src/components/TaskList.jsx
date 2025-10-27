import React from 'react';

export default function TaskList({ tasks, onDone }) {
  return (
    <div className="card">
      <h2>Latest Tasks</h2>
      {tasks.length === 0 && <p>No tasks</p>}
      <div className="task-list">
        {tasks.map(t => (
          <div key={t.id} className="task-card">
            <div>
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <small>{new Date(t.created_at).toLocaleString()}</small>
            </div>
            <div>
              <button onClick={() => onDone(t.id)}>Done</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
