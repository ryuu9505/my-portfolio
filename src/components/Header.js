import React from 'react';
import { HeaderContainer, NavMenu, NavLink } from './HeaderStyles';
import { Link } from 'react-scroll';  // react-scroll의 Link 컴포넌트 추가

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
            Tech Stack
          </Link>
        </NavLink>
        <NavLink>
          <Link to="projects" smooth={true} duration={500}>
            Products
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