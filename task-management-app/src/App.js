import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    console.log((new Date(JSON.parse(savedTasks)[0].dueDate)).getTime());
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks.sort((a,b) => (new Date(a.dueDate)).getTime() - (new Date(b.dueDate)).getTime())} deleteTask={deleteTask}/>
    </div>
  );
};

export default App;