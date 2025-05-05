import { HeaderContainer, NavLink, NavMenu } from '@styles/layout/HeaderStyles';
import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <HeaderContainer>
      <NavMenu>
        <NavLink>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </NavLink>
        <NavLink>
          <Link to="history" smooth={true} duration={500}>
            History
          </Link>
        </NavLink>
        <NavLink>
          <Link to="tech-stack" smooth={true} duration={500}>
            Skills
          </Link>
        </NavLink>
        <NavLink>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </NavLink>
        <NavLink>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </NavLink>
      </NavMenu>
    </HeaderContainer>
  );
}

export default Header;
