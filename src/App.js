import React, { useEffect } from 'react';

import { Header } from './components/Header';
import { Sidebar } from './components/SIdebar';
import {
  getProjectsFromFireBase,
  getDataFromSnapshot,
} from './firestore/services';

export const App = () => {
  useEffect(() => {
    const unsubscribe = getProjectsFromFireBase({
      next: snapshot => console.log(snapshot.docs.map(getDataFromSnapshot)),
      error: error => console.error(error),
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <main>Hello World</main>
    </>
  );
};
