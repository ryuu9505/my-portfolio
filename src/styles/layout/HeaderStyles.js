import styled from 'styled-components';

export const HeaderContainer = styled.header`
  // color
  background-color: ${({ theme }) => theme.colors.backgroundLight || '#FFFFFF'};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border || '#e0e0e0'};

  // size
  width: 100%;
  height: 44px;

  // layout
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 44px;
  position: fixed;
  z-index: 1001;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary || '#333333'};
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.primary || '#333333'};
  font-size: 0.7rem;
  font-weight: 300;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  cursor: pointer;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary || '#646464'};
  }
`;
