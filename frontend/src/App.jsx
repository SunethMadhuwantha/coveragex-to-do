import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchTasks() {
    setLoading(true);
    const res = await fetch(`${BACKEND}/api/tasks`);
    const data = await res.json();
    setTasks(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function addTask({ title, description }) {
    const res = await fetch(`${BACKEND}/api/tasks`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title, description })
    });
    if (res.ok) {
      await fetchTasks();
    } else {
      alert('Failed to create task');
    }
  }

  async function markDone(id) {
    const res = await fetch(`${BACKEND}/api/tasks/${id}/done`, {
      method: 'PUT'
    });
    if (res.ok) {
      setTasks(prev => prev.filter(t => t.id !== id));
    } else {
      alert('Failed to mark done');
    }
  }

  return (
    <div className="page">
      <h1>To-Do App</h1>
      <div className="panel">
        <div className="left">
          <TaskForm onAdd={addTask} />
        </div>
        <div className="right">
          {loading ? <div>Loading...</div> : <TaskList tasks={tasks} onDone={markDone} />}
        </div>
      </div>
    </div>
  )
}
