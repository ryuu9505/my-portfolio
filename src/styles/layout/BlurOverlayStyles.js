import styled from 'styled-components';

export const BlurOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(12px);
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 1s;
  z-index: 999;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
`;