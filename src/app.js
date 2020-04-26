import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import { GlobalStyle, Theme } from 'styles';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
