import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

export default function LoginButton({ style }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <RouterLink
      to="/login"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.06)' : 'transparent',
        transition: 'background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        textDecoration: 'none',
        ...style,
      }}
      aria-label="Sign in"
    >
      <FiLogIn size={18} color="#333333" strokeWidth={2} />
    </RouterLink>
  );
}
