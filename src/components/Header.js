import { logo } from '@assets/images';
import { HeaderContainer, NavLink, NavMenu } from '@styles/layout/HeaderStyles';
import { sectionConfig } from '@utils/sections';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';

function Header({ sectionVisibility }) {
  return (
    <HeaderContainer>
      <RouterLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" style={{ height: '24px', marginRight: '48px' }} />
      </RouterLink>
      <NavMenu>
        {sectionConfig.map(
          section =>
            sectionVisibility[section.id] && (
              <NavLink key={section.id}>
                <Link to={section.id} smooth={true} duration={500} offset={section.offset}>
                  {section.label}
                </Link>
              </NavLink>
            )
        )}
      </NavMenu>
      <button aria-label="search" style={{ background: 'none', border: 'none', marginLeft: '48px' }}>
        <FiSearch size={24} color="white" />
      </button>
    </HeaderContainer>
  );
}

export default Header;
