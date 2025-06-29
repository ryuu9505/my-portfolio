import Logo from '@components/Logo';
import { HeaderContainer } from '@styles/layout/HeaderStyles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function BasicHeader() {
  return (
    <>
      <HeaderContainer>
        <div style={{ flex: 1 }} />
        <RouterLink
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Logo variant="white" size={32} />
        </RouterLink>
        <div style={{ flex: 1 }} />
      </HeaderContainer>
    </>
  );
}

export default BasicHeader;
