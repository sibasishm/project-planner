import React from 'react';
import { useTasks } from '../hooks/useTasks';
import { Checkbox } from './Checkbox';

export const Tasks = () => {
  const [tasks] = useTasks('v2KAkXXZbVOGCg8KeULY');

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Checkbox />
          <span>{task.title}</span>
        </li>
      ))}
    </ul>
  );
};
