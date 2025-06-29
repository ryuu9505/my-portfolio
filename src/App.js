import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme/theme';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '@/components/AuthProvider';
import LoginPage from '@/pages/LoginPage';
import PostPage from '@/pages/PostPage';
import UserListPage from '@/pages/UserListPage';
import UserPage from '@/pages/UserPage';
import BasicHeader from '@/components/header/BasicHeader';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <BasicHeader />
            <Routes>
              <Route path="/" element={<Navigate to="/users" replace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/:username" element={<UserPage />} />
              <Route path="/users" element={<UserListPage />} />
              <Route path="/posts/:postId" element={<PostPage />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
