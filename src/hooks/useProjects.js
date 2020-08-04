import { useState, useEffect } from 'react';
import {
  getDataFromFirebase,
  getDataFromSnapshot,
} from '../firestore/services';
import { arraysEqual } from '../helpers';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getDataFromFirebase('projects')
      .orderBy('title')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(getDataFromSnapshot);

        if (!arraysEqual(allProjects, projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return [projects, setProjects];
};
