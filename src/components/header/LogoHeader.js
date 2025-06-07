import { logo } from '@assets/images';
import { HeaderContainer } from '@styles/layout/HeaderStyles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function LogoHeader() {
  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
      <RouterLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ height: '24px' }} />
      </RouterLink>
    </HeaderContainer>
  );
}

export default LogoHeader; 