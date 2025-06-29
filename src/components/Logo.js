import React from 'react';

const logoMap = {
  default: '/logo.png',
  black: '/logo_black.png',
  pink: '/logo_pink.png',
  red: '/logo_red.png',
  white: '/logo_white.png',
  yellow: '/logo_yellow.png',
};

const Logo = ({ size = 120, variant = 'default', style }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      margin: '32px 0',
      opacity: 0.9,
      ...style,
    }}
  >
    <img
      src={logoMap[variant] || logoMap.default}
      alt="Logo"
      style={{ width: size, height: 'auto' }}
    />
  </div>
);

export default Logo;
