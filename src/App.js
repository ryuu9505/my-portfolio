import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/info" element={<InfoPage />} />
          <Route path="/" element={<Navigate to="/info" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;