import React from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Tasks } from './components/Tasks';

export const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <p>Here are the tasks: </p>
        <Tasks />
      </main>
    </>
  );
};
