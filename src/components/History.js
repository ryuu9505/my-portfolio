import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollAnimation from './common/ScrollAnimation';
import neubilityLogo from '../assets/neubility-logo.png';
import ssafyLogo from '../assets/ssafy-logo.png';
import inhaLogo from '../assets/inha-logo.png';

const HistorySection = styled.section`
  padding: 120px 0 200px;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const TextContent = styled.div`
  margin-top: 0px;
  font-size: 1.6rem;
  line-height: 1.2;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 50px;
  text-align: center;
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
`;

const TimelineItem = styled(motion.div)`
  width: 100%;
`;

const TimelineContent = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CompanyLogo = styled.img`
  width: 88px;
  height: 88px;
  object-fit: contain;
  margin-right: 30px;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 0px;
`;

const CompanyName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const Position = styled.h4`
  font-size: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  transform: translateY(-1px);
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  margin: 0;
  margin-bottom: 4px;
`;

const Period = styled.span`
  font-size: 0.9rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary}99;
  line-height: 1;
`;

const historyData = [
  {
    id: 1,
    logo: neubilityLogo,
    company: '뉴빌리티',
    position: '백엔드 개발',
    description: '자율주행 로봇 운용 플랫폼 개발',
    period: '2025.02 - 재직 중'
  },
  {
    id: 2,
    logo: ssafyLogo,
    company: '삼성 청년 SW 아카데미',
    position: '웹 개발 트랙',
    description: '웹 개발 지식 학습',
    period: '2023.07 - 2024.06 (1,600시간)'
  },
  {
    id: 3,
    logo: inhaLogo,
    company: '인하대학교',
    position: '정보통신공학과',
    description: '컴퓨터 공학 및 통신 공학 지식 학습',
    period: '2014.03 - 2021.08'
  },
];

const History = () => {
  return (
    <HistorySection id="history">
      <Container>
        <ScrollAnimation>
          <Title>History</Title>
        </ScrollAnimation>
        <ScrollAnimation delay={0.15}>
          <TextContent>
            My journey so far.
          </TextContent>
        </ScrollAnimation>
        <HistoryList>
          {historyData.map((item, index) => (
            <ScrollAnimation key={item.id} delay={0.3}>
              <TimelineItem>
                <TimelineContent>
                  <CompanyLogo src={item.logo} alt={item.company} />
                  <ContentWrapper>
                    <TitleWrapper>
                      <CompanyName>{item.company}</CompanyName>
                      <Position>{item.position}</Position>
                    </TitleWrapper>
                    <Description>{item.description}</Description>
                    <Period>{item.period}</Period>
                  </ContentWrapper>
                </TimelineContent>
              </TimelineItem>
            </ScrollAnimation>
          ))}
        </HistoryList>
      </Container>
    </HistorySection>
  );
};

export default History;