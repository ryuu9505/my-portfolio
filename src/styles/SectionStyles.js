import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 80px 20px 240px 20px;
  background-color: ${({ background, theme }) => background || 'white'};
  color: ${({ color, theme }) => color || theme.colors.textLight};
  text-align: center;
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ color, theme }) => color || theme.colors.textLight};
  margin-bottom: 50px;
  text-align: center;
`;

export const SectionDescription = styled.div`
  margin-top: 0px;
  font-size: 1.6rem;
  line-height: 1.2;
  font-weight: 200;
  color: ${({ color, theme }) => color || theme.colors.secondary};
  margin-bottom: 0px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;
