import React from 'react';

export default function HeaderLayout({ height, children }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        height: height,
        overflow: 'visible',
        pointerEvents: 'none',
      }}
    >
      <div style={{ pointerEvents: 'auto' }}>{children}</div>
    </div>
  );
}
