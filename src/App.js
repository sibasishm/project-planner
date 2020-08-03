import React from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/SIdebar';
import { useTasks } from './hooks/useTasks';

export const App = () => {
  const [tasks] = useTasks('v2KAkXXZbVOGCg8KeULY');

  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <p>Here are the tasks: </p>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};
