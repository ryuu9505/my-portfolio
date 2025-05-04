import styled from 'styled-components';

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const HistoryCard = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.card || theme.colors.backgroundLight};
  border-radius: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const HistoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 4px 0;
  line-height: 1.1;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const HistoryPeriod = styled.span`
  font-size: 0.8rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary}99;
  line-height: 1.2;
  display: block;
  margin-bottom: 6px;
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const HistoryDescription = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 0.7rem;
    line-height: 1.3;
  }
`; 