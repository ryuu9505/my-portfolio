import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function LoginButton({ style, children = 'Sign in' }) {
  return (
    <RouterLink
      to="/login"
      style={{
        color: '#fff',
        fontWeight: 500,
        fontSize: '1rem',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        ...style,
      }}
    >
      {children}
    </RouterLink>
  );
}
