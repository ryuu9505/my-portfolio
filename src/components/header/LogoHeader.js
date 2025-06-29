import Logo from '@components/Logo';
import { HeaderContainer } from '@styles/layout/HeaderStyles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function LogoHeader() {
  return (
    <HeaderContainer
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
    >
      <RouterLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo variant="white" size={24} />
      </RouterLink>
    </HeaderContainer>
  );
}

export default LogoHeader;
