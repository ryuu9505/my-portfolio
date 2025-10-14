import styled from 'styled-components';

export const FilmTrack = styled.div`
  display: flex;
  width: calc(400px * 10);
  will-change: transform;
  transition: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(200px * 10);
  }
`;

export const ThumbnailWrapper = styled.div`
  margin-right: 20px;
  display: inline-block;
  position: relative;
  width: 400px;
  height: 250px;
  vertical-align: top;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    height: 125px;
  }
`;
