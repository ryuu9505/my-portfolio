import React from 'react';

import { logo_dark } from '@/assets/images';

const Logo = ({ size = 120 }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '32px 0'
  }}>
    <img src={logo_dark} alt="Logo" style={{ width: size, height: 'auto' }} />
  </div>
);

export default Logo; 