import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  height: ${({ open }) => (open ? '44px' : '0')};
  min-height: 0;
  max-height: ${({ open }) => (open ? '100vh' : '0')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: height 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s cubic-bezier(.4,0,.2,1);
  display: flex;
  align-items: center;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
`;

export const SearchInputWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    font-size: 20px;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
  }
`; 