import { collatedTasks } from '../constants';

export const collatedTasksExists = selectedProject =>
  collatedTasks.findIndex(task => selectedProject === task.key) > -1;

export const objectsEqual = (ob1, ob2) =>
  Object.keys(ob1).length === Object.keys(ob2).length &&
  Object.keys(ob1).every(prop => ob1[prop] === ob2[prop]);

export const arraysEqual = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.every((item, idx) => objectsEqual(item, arr2[idx]));
