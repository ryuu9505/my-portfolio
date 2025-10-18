import { useAuth } from '@components/AuthProvider';
import ProfileDropdown from '@components/header/ProfileDropdown';
import LoginButton from '@components/LoginButton';
import Logo from '@components/Logo';
import { RoundedImage } from '@styles/ImageStyles';
import { HeaderContainer } from '@styles/layout/HeaderStyles';
import React, { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function BasicHeader() {
  const { user, loading, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMyPage = () => {
    if (user?.username) {
      navigate(`/${user.username}`);
      setIsDropdownOpen(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

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
            <Logo variant="black" size={24} />
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
          {loading ? (
            // 로딩 중일 때는 빈 공간 유지 (깜빡임 방지)
            <div style={{ width: 30, height: 30 }} />
          ) : user ? (
            <div style={{ position: 'relative' }} ref={dropdownRef}>
              <RoundedImage
                src={user.profileImage?.url || '/default-profile.png'}
                size={30}
                onClick={handleProfileClick}
                style={{ cursor: 'pointer' }}
              />
              {isDropdownOpen && (
                <ProfileDropdown
                  onMyPage={handleMyPage}
                  onLogout={handleLogout}
                />
              )}
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </HeaderContainer>
    </>
  );
}

export default BasicHeader;
