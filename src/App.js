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
          <Route path="/" element={<Navigate to="/info/1" replace />} />
          <Route path="/info" element={<Navigate to="/info/1" replace />} />
          <Route path="/info/:userId" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
