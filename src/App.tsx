import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import defaultTheme from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <div className="App">hello world</div>
    </ThemeProvider>
  );
}

export default App;
