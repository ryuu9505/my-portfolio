import React from 'react';

export default function HeaderNotice({ children }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '44px',
        left: 0,
        width: '100%',
        zIndex: 998,
        background: '#fffbe7',
        color: '#222',
        fontWeight: 300,
        fontSize: '1rem',
        height: '44px',
        borderBottom: '1.5px solid #ffe082',
        gap: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
} 