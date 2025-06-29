import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function LoginButton({ style, children = '로그인' }) {
  return (
    <RouterLink
      to="/login"
      style={{
        color: '#fff',
        fontWeight: 600,
        fontSize: '1rem',
        textDecoration: 'none',
        padding: '0 24px',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        background: '#222',
        ...style,
      }}
    >
      {children}
    </RouterLink>
  );
}
