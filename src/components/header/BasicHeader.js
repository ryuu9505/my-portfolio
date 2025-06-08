import { logo } from '@assets/images';
import { HeaderContainer } from '@styles/layout/HeaderStyles';
import React, { useEffect,useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

import BlurOverlay from '../BlurOverlay';
import SearchBar from '../SearchBar';

const HEADER_HEIGHT = 44;
const SEARCHBAR_HEIGHT = 44;

function BasicHeader() {
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

  const handleSearchToggle = () => setIsSearchOpen(open => !open);

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
          height: isSearchOpen ? HEADER_HEIGHT + SEARCHBAR_HEIGHT : HEADER_HEIGHT,
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <HeaderContainer>
            <RouterLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="logo" style={{ height: '32px' }} />
            </RouterLink>
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
