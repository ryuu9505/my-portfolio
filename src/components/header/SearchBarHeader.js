import { logo } from '@assets/images';
import BlurOverlay from '@components/BlurOverlay';
import SearchBar from '@components/SearchBar';
import { HeaderContainer, NavLink, NavMenu } from '@styles/layout/HeaderStyles';
import { sectionConfig } from '@utils/sections';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const HEADER_HEIGHT = 44;
const SEARCHBAR_HEIGHT = 44;

function SearchBarHeader({ sectionVisibility }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
            <RouterLink
              to="/"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ height: '32px', marginRight: '48px' }}
              />
            </RouterLink>
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
            <button
              aria-label="search"
              style={{ background: 'none', border: 'none', marginLeft: '48px' }}
              onClick={handleSearchToggle}
            >
              <FiSearch size={24} color="white" />
            </button>
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

export default SearchBarHeader;
