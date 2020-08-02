import React from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/SIdebar';

export const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>Hello World</main>
    </>
  );
};
