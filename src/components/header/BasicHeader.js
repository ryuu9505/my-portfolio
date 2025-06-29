import Logo from '@components/Logo';
import { HeaderContainer } from '@styles/layout/HeaderStyles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function BasicHeader() {
  return (
    <>
      <HeaderContainer>
        <div style={{ flex: 1 }} />
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RouterLink to="/">
            <Logo variant="white" size={32} />
          </RouterLink>
        </div>
        <div style={{ flex: 1 }} />
      </HeaderContainer>
    </>
  );
}

export default BasicHeader;
