import styled from 'styled-components';

export const RoundedImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const SquareImage = styled.img`
  width: 88px;
  height: 88px;
  object-fit: contain;
  margin-right: 30px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;
