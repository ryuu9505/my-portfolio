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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <About />
      <History />
      <TechStack />
      <Projects />
      <Contact />
      <div className="App">
      </div>
    </ThemeProvider>
  );
}

export default App;