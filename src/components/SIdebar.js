import React from 'react';
import { FiInbox, FiCalendar, FiWatch, FiChevronRight } from 'react-icons/fi';
import { Projects } from './Projects';

export const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <span>
            <FiInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FiWatch />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FiCalendar />
          </span>
          <span>Upcoming</span>
        </li>
      </ul>
      <div>
        <FiChevronRight />
        Projects
        <Projects />
      </div>
    </aside>
  );
};
