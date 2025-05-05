import { inhaLogo, neubilityLogo, ssafyLogo } from '@assets/logos';
import { Section, SectionTitle } from '@components/section/Section';
import { ScrollAnimation } from '@styles/AnimationStyles';
import { CardList } from '@styles/CommonStyles';
import {
  ContentWrapper,
  HistoryCard,
  HistoryDescription,
  HistoryPeriod,
  HistoryTitle,
  Position,
  TitleWrapper,
} from '@styles/HistoryStyles';
import { SquareImage } from '@styles/ImageStyles';
import React from 'react';

const historyData = [
  {
    id: 1,
    logo: neubilityLogo,
    company: '뉴빌리티',
    position: '백엔드 개발',
    description: '로봇 운용/관리 플랫폼 개발',
    period: '2025.02 - 재직 중',
  },
  {
    id: 2,
    logo: ssafyLogo,
    company: '삼성 청년 SW 아카데미',
    position: '웹 개발 트랙',
    description: '웹 개발 지식 학습',
    period: '2023.07 - 2024.06 (1,600시간)',
  },
  {
    id: 3,
    logo: inhaLogo,
    company: '인하대학교',
    position: '정보통신공학과',
    description: '컴퓨터 공학 및 통신 공학 지식 학습',
    period: '2014.03 - 2021.08',
  },
];

const History = () => {
  return (
    <Section id="history">
      <SectionTitle>
        <ScrollAnimation>History</ScrollAnimation>
      </SectionTitle>
      <CardList>
        {historyData.map((item, index) => (
          <ScrollAnimation key={item.id} delay={0.3}>
            <HistoryCard>
              <SquareImage src={item.logo} alt={item.company} />
              <ContentWrapper>
                <TitleWrapper>
                  <HistoryTitle>{item.company}</HistoryTitle>
                  <Position>{item.position}</Position>
                </TitleWrapper>
                <HistoryDescription>{item.description}</HistoryDescription>
                <HistoryPeriod>{item.period}</HistoryPeriod>
              </ContentWrapper>
            </HistoryCard>
          </ScrollAnimation>
        ))}
      </CardList>
    </Section>
  );
};

export default History;
