import styled from 'styled-components';

export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: ${({ fit }) => fit || 'cover'};
  aspect-ratio: ${({ ratio }) => ratio || 'auto'};
`;
