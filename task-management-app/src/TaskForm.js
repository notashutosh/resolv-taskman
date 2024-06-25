import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('1');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, dueDate, priority, description });
    setTitle('');
    setDueDate('');
    setPriority('1');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;