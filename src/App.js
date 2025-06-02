import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme/theme';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import PostPage from '@/pages/PostPage';
import UserListPage from '@/pages/UserListPage';
import UserPage from '@/pages/UserPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/:username" element={<UserPage />} />
          <Route path="/" element={<Navigate to="/hyeongjun" replace />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
