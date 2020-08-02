import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { CSSReset } from './components/styled/CSSReset';
import { theme } from './theme';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
