import { logo } from '@assets/images';
import { RoundedImage } from '@styles/ImageStyles';
import { HeaderContainer } from '@styles/layout/HeaderStyles';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../AuthProvider';
import BlurOverlay from '../BlurOverlay';
import SearchBar from '../SearchBar';

const HEADER_HEIGHT = 44;
const SEARCHBAR_HEIGHT = 44;

function BasicHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.getElementById('root');
    if (isSearchOpen) {
      document.body.classList.add('blur-active');
      if (root) root.classList.add('blur-active');
    } else {
      document.body.classList.remove('blur-active');
      if (root) root.classList.remove('blur-active');
    }
    return () => {
      document.body.classList.remove('blur-active');
      if (root) root.classList.remove('blur-active');
    };
  }, [isSearchOpen]);

  const handleSearchToggle = () => setIsSearchOpen((open) => !open);

  const handleProfileClick = () => setDropdownOpen((open) => !open);
  const handleMyPage = () => {
    setDropdownOpen(false);
    navigate(`/${user.username}`);
  };
  const handleLogout = async () => {
    setDropdownOpen(false);
    await logout();
    navigate('/');
  };

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest('.profile-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <>
      {/* 헤더+검색바를 하나의 fixed 컨테이너로 묶음, height를 명확히 제한 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          height: isSearchOpen
            ? HEADER_HEIGHT + SEARCHBAR_HEIGHT
            : HEADER_HEIGHT,
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <HeaderContainer>
            {/* 좌측: 빈 공간 */}
            <div style={{ flex: 1 }} />
            {/* 중앙: 로고 */}
            <RouterLink
              to="/"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}
            >
              <img src={logo} alt="logo" style={{ height: '32px' }} />
            </RouterLink>
            {/* 우측: 프로필 이미지 또는 로그인 링크 */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
              {user && user.profileImage && user.username ? (
                <div style={{ position: 'relative' }}>
                  <RoundedImage
                    src={user.profileImage.url}
                    alt={user.profileImage.altText || user.username}
                    style={{
                      width: 64,
                      height: 64,
                      border: '1.5px solid #e0e0e0',
                      boxSizing: 'border-box',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                    onClick={handleProfileClick}
                  />
                  {dropdownOpen && (
                    <div
                      className="profile-dropdown"
                      style={{
                        position: 'absolute',
                        top: 70,
                        right: 0,
                        background: '#fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        borderRadius: 8,
                        minWidth: 140,
                        zIndex: 2000,
                        padding: '8px 0',
                      }}
                    >
                      <div
                        style={{
                          padding: '10px 20px',
                          cursor: 'pointer',
                          fontWeight: 500,
                          color: '#222',
                        }}
                        onClick={handleMyPage}
                      >
                        마이페이지
                      </div>
                      <div
                        style={{
                          padding: '10px 20px',
                          cursor: 'pointer',
                          fontWeight: 500,
                          color: '#222',
                        }}
                        onClick={handleLogout}
                      >
                        로그아웃
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <RouterLink
                  to="/login"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 44,
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '0 16px',
                  }}
                >
                  로그인
                </RouterLink>
              )}
            </div>
          </HeaderContainer>
          <SearchBar open={isSearchOpen} />
        </div>
      </div>
      {/* BlurOverlay는 그 아래에만 */}
      <BlurOverlay onClose={handleSearchToggle} open={isSearchOpen} />
      {/* 페이지 컨텐츠: 헤더 높이만큼 패딩 */}
      <div style={{ paddingTop: HEADER_HEIGHT }} />
    </>
  );
}

export default BasicHeader;
