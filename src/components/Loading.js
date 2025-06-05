import { logo } from '@assets/images';
import React from 'react';

const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    <img src={logo} alt="Logo" style={{ width: 120 }} />
  </div>
);

export default Loading;