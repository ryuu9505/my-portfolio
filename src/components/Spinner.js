import React from 'react';

const Spinner = ({ size = 40, style }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...style
  }}>
    <div style={{
      width: size,
      height: size,
      border: '4px solid #eee',
      borderTop: '4px solid #333',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}
    </style>
  </div>
);

export default Spinner; 