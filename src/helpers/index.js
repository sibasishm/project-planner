import { collatedTasks } from '../constants';

export const collatedTasksExists = selectedProject =>
  collatedTasks.findIndex(task => selectedProject === task.key) > -1;
