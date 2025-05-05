import styled from 'styled-components';

export const TechList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 150px));
  gap: 30px;
  margin-top: 30px;
  width: 100%;
  max-width: 660px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, minmax(0, 100px));
    gap: 20px;
    margin-top: 20px;
  }
`;

export const TechCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 150px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

export const TechIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0px;

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: -4px;
  }
`;

export const TechName = styled.h3`
  font-size: 1rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.textLight};

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
