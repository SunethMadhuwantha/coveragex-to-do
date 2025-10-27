import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) {
      alert('Title required');
      return;
    }
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  }

  return (
    <div className="card">
      <h2>Add Task</h2>
      <form onSubmit={submit}>
        <div>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        </div>
        <div>
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}
