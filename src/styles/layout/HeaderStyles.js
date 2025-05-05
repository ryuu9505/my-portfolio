import styled from 'styled-components';

export const HeaderContainer = styled.header`
  // color
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);

  // size
  width: 100%;
  height: 44px;

  // layout
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  position: fixed;
  z-index: 1000;

  // border
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: #f5f5f7;
  font-size: 0.85rem;
  font-weight: 300;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  cursor: pointer;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;

  &:hover {
    color: #aaaaaa;
  }
`;
