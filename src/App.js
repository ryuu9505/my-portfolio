import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Header from './components/Header';
import About from './components/About'; 
import History from './components/History';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled from 'styled-components';
import FilmSection from './components/FilmSection';

const WhiteSpace = styled.div`
  height: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <About />
      <WhiteSpace />
      <History />
      <WhiteSpace />
      <TechStack />
      <WhiteSpace />
      <Projects />
      <WhiteSpace />
      <FilmSection />
      <WhiteSpace />
      <Contact />
    </ThemeProvider>
  );
}

export default App;