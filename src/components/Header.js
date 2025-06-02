import { HeaderContainer, NavLink, NavMenu } from '@styles/layout/HeaderStyles';
import { sectionConfig } from '@utils/sections';
import React from 'react';
import { Link } from 'react-scroll';

function Header({ sectionVisibility }) {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
}

export default Header;
