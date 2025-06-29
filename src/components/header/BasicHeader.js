import LoginButton from '@components/LoginButton';
import Logo from '@components/Logo';
import { HeaderContainer } from '@styles/layout/HeaderStyles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthUser } from '@hooks/useAuthUser';
import RoundImage from '@components/RoundImage';

function BasicHeader() {
  const { user, checked } = useAuthUser();

  if (!checked) return null;

  return (
    <>
      <HeaderContainer>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        ></div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RouterLink to="/">
            <Logo variant="white" size={30} />
          </RouterLink>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {!checked ? null : user ? (
            <RoundImage src={user.profileImage?.url} size={32} />
          ) : (
            <LoginButton />
          )}
        </div>
      </HeaderContainer>
    </>
  );
}

export default BasicHeader;
