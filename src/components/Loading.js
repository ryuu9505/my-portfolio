import Logo from '@components/Logo';
import React from 'react';

const Loading = ({ height, marginTop }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: height || '100vh',
      marginTop: marginTop || '0px',
    }}
  >
    <Logo variant="black" size={120} />
  </div>
);

export default Loading;
