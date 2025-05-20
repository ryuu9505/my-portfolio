import Link from '@components/Link';
import { StarRatingAnimation } from '@styles/AnimationStyles';
import {
  ContentWrapper,
  HistoryCard,
  HistoryDescription,
  HistoryPeriod,
  HistoryTitle,
  Position,
  TitleWrapper,
} from '@styles/CommonStyles';
import { SquareImage } from '@styles/ImageStyles';
import React, { useState } from 'react';
import { FaCertificate } from 'react-icons/fa';
import styled from 'styled-components';

const StyledTechCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 150px;
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-12px);
  }

  .tech-icon {
    font-size: 3rem;
    margin-bottom: 0px;
  }

  .tech-name {
    font-size: 1rem;
    font-weight: 100;
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    width: 100px;
    padding: 12px;
    .tech-icon {
      font-size: 2rem;
      margin-bottom: -4px;
    }
    .tech-name {
      font-size: 0.7rem;
    }
  }
`;

export const TechCard = ({ icon, name, level }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledTechCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', overflow: 'visible' }}
    >
      <span className="tech-icon">{icon}</span>
      <span className="tech-name">{name}</span>
      <StarRatingAnimation
        show={isHovered}
        count={level}
        size="0.6rem"
        color="#FFD700"
        animationDirection="y"
        style={{
          position: 'absolute',
          left: '50%',
          top: '100%',
          transform: 'translateX(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 8,
          pointerEvents: 'none',
          zIndex: 3,
        }}
      />
    </StyledTechCard>
  );
};

const StyledCertBadge = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0px;
  width: 150px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }

  .cert-icon {
    position: absolute;
    top: 10px;
    left: 10px;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #000000;
    z-index: 2;
  }

  img {
    width: 128px;
    height: 128px;
    object-fit: contain;
    border-radius: 12px;
    background: #fff;
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    padding: 10px;
    .cert-icon {
      width: auto;
      height: auto;
      font-size: 0.8rem;
      top: 4px;
      left: 4px;
    }
    img {
      width: 60px;
      height: 60px;
      padding: 2px 4px;
    }
  }
`;

export const CertBadge = ({ img, url, alt = 'cert badge' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <StyledCertBadge>
        <span className="cert-icon">
          <FaCertificate />
        </span>
        <img src={img} alt={alt} />
      </StyledCertBadge>
    </a>
  );
};

export function HistoryCardItem({
  logo,
  company,
  position,
  description,
  period,
  url,
  miniCards = [],
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    
    <HistoryCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', overflow: 'visible' }}
    >
      <SquareImage src={logo} alt={company} />
      <ContentWrapper>
        <TitleWrapper>
          <HistoryTitle>{company}</HistoryTitle>
          <Position>{position}</Position>
        </TitleWrapper>
        <HistoryDescription>{description}</HistoryDescription>
        <HistoryPeriod>{period}</HistoryPeriod>
      </ContentWrapper>
    </HistoryCard>
  );
}
