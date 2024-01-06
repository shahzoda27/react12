import React from 'react';

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.name}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;