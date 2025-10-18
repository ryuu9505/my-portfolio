import { useAuth } from '@components/AuthProvider';
import BlurOverlay from '@components/BlurOverlay';
import ProfileDropdown from '@components/header/ProfileDropdown';
import LoginButton from '@components/LoginButton';
import Logo from '@components/Logo';
import SearchBar from '@components/SearchBar';
import useSearchOpen from '@hooks/useSearchOpen';
import HeaderLayout from '@layouts/HeaderLayout';
import { RoundedImage } from '@styles/ImageStyles';
import { HeaderContainer, NavLink, NavMenu } from '@styles/layout/HeaderStyles';
import { sectionConfig } from '@utils/sections';
import React, { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const HEADER_HEIGHT = 44;
const SEARCHBAR_HEIGHT = 44;

function Header({ sectionVisibility }) {
  const {
    isSearchOpen,
    setIsSearchOpen,
    openSearch,
    closeSearch,
    toggleSearch,
  } = useSearchOpen();
  const { user, loading, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchToggle = () => setIsSearchOpen((open) => !open);

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
      <HeaderLayout
        height={isSearchOpen ? HEADER_HEIGHT + SEARCHBAR_HEIGHT : HEADER_HEIGHT}
      >
        <HeaderContainer>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <RouterLink
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '48px',
              }}
            >
              <Logo variant="black" size={24} />
            </RouterLink>
          </div>
          <NavMenu>
            {sectionConfig.map(
              (section) =>
                sectionVisibility[section.id] && (
                  <NavLink key={section.id}>
                    <Link
                      to={section.id}
                      smooth={true}
                      duration={500}
                      offset={section.offset}
                    >
                      {section.label}
                    </Link>
                  </NavLink>
                )
            )}
          </NavMenu>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '16px',
            }}
          >
            <button
              aria-label="search"
              style={{ background: 'none', border: 'none', marginLeft: '48px' }}
              onClick={handleSearchToggle}
            >
              <FiSearch size={24} color="#333333" />
            </button>
            {!loading &&
              (user ? (
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  ref={dropdownRef}
                >
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
              ))}
          </div>
        </HeaderContainer>
        <SearchBar open={isSearchOpen} />
      </HeaderLayout>
      <BlurOverlay onClose={handleSearchToggle} open={isSearchOpen} />
      <div style={{ paddingTop: HEADER_HEIGHT }} />
    </>
  );
}

export default Header;
