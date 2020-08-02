import React from 'react';
import { FiInbox, FiCalendar, FiWatch, FiChevronRight } from 'react-icons/fi';

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
      <ul>
        <li>
          <span>
            <FiChevronRight />
          </span>
          <span>Projects</span>
        </li>
        <li>
          <span>
            <FiChevronRight />
          </span>
          <span>Labels</span>
        </li>
        <li>
          <span>
            <FiChevronRight />
          </span>
          <span>Filters</span>
        </li>
      </ul>
    </aside>
  );
};
