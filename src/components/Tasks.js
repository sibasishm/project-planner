import React from 'react';
import { useTasks } from '../hooks/useTasks';

export const Tasks = () => {
  const [tasks] = useTasks('v2KAkXXZbVOGCg8KeULY');

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};
