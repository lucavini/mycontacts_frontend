import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import defaultTheme from '../styles/themes/default';

import Header from '../Components/Header';
import ContactsList from '../Components/ContactsList';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
