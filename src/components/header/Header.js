import BlurOverlay from '@components/BlurOverlay';
import Logo from '@components/Logo';
import SearchBar from '@components/SearchBar';
import useSearchOpen from '@hooks/useSearchOpen';
import HeaderLayout from '@layouts/HeaderLayout';
import { HeaderContainer, NavLink, NavMenu } from '@styles/layout/HeaderStyles';
import { sectionConfig } from '@utils/sections';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
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
  const handleSearchToggle = () => setIsSearchOpen((open) => !open);

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
              <Logo variant="white" size={24} />
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
            }}
          >
            <button
              aria-label="search"
              style={{ background: 'none', border: 'none', marginLeft: '48px' }}
              onClick={handleSearchToggle}
            >
              <FiSearch size={20} color="white" />
            </button>
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
