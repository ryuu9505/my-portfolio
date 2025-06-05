import { logo } from '@assets/images';
import React from 'react';

const Loading = ({ height, marginTop }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height || '100vh',
    marginTop: marginTop || '0px'
  }}>
    <img src={logo} alt="Logo" style={{ width: 120 }} />
  </div>
);

export default Loading;