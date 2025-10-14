import styled from 'styled-components';

export const SkillCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 870px;
  margin: 30px auto 0 auto;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 220px;
    gap: 20px;
    margin: 20px auto 0 auto;
  }
`;
