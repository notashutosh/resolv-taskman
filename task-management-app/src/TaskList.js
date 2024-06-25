import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

export default TaskList;