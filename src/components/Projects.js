import React from 'react';
import { useProjects } from '../hooks/useProjects';

export const Projects = () => {
  const [projects] = useProjects();

  return (
    <ul>
      {projects.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};
