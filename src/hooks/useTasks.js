import { useEffect, useState } from 'react';
import {
  getDataFromFirebase,
  getDataFromSnapshot,
} from '../firestore/services';
import { collatedTasksExists } from '../helpers';

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  let filters = [];

  if (selectedProject && !collatedTasksExists(selectedProject)) {
    filters = ['projectId', '==', selectedProject];
  } else if (selectedProject === 'TODAY') {
    filters = ['schedule', '==', new Date()];
  } else if (selectedProject === 'INBOX') {
    filters = ['schedule', '==', ''];
  }

  useEffect(() => {
    const unsubscribe = getDataFromFirebase(
      'tasks',
      {
        next: snapshot => setTasks(snapshot.docs.map(getDataFromSnapshot)),
        error: error => setTasks([]),
      },
      ...filters
    );

    return unsubscribe;
  }, [filters]);

  return [tasks, setTasks];
};
