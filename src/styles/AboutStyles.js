import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; // 중앙 정렬
  padding: 120px 20px;
  background-color: ${({ theme }) => theme.colors.backgroundDark}; // 검정 배경
  color: ${({ theme }) => theme.colors.textDark}; // 밝은 텍스트 색상
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  margin-top: 10px;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.textDark};
  }

  p {
    margin-top: 40px;
    font-size: 1.6rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.textDark};
  }

  small {
    margin-top: 40px;
    font-size: 1.2rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
