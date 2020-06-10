import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import { GlobalStyle, theme } from '~/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
