import React from 'react';
import { FiPlusCircle, FiTrendingUp, FiBell, FiSettings } from 'react-icons/fi';

import { StyledHeader } from './styled/Header';

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      Project Planner
      <nav>
        <ul>
          <li>
            <FiPlusCircle />
          </li>
          <li>
            <FiTrendingUp />
          </li>
          <li>
            <FiBell />
          </li>
          <li>
            <FiSettings />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
