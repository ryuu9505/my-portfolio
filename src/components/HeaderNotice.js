import React from 'react';

const COLOR_STYLES = {
  warning: {
    background: '#fffbe7',
    borderBottom: '1.5px solid #ffe082',
    color: '#222',
    opacity: 0.9,
  },
  info: {
    background: '#e3f2fd',
    borderBottom: '1.5px solid #90caf9',
    color: '#1565c0',
    opacity: 0.9,
  },
  error: {
    background: '#ffebee',
    borderBottom: '1.5px solid #ef9a9a',
    color: '#c62828',
    opacity: 0.9,
  },
};

export default function HeaderNotice({ message, type = 'warning', icon }) {
  const colorStyle = COLOR_STYLES[type] || COLOR_STYLES.warning;
  return (
    <div
      style={{
        position: 'fixed',
        top: '44px',
        left: 0,
        width: '100%',
        zIndex: 998,
        fontWeight: 300,
        fontSize: '1rem',
        height: '44px',
        gap: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...colorStyle,
      }}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          style={{
            width: 22,
            height: 22,
            verticalAlign: 'middle',
            display: 'inline-block',
            lineHeight: 1,
            position: 'relative',
            top: '-2px',
            marginRight: 6,
          }}
        />
      )}
      <span style={{ verticalAlign: 'middle', lineHeight: 1 }}>{message}</span>
    </div>
  );
}
