import InfoPage from '@pages/InfoPage';
import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme/theme';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

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
