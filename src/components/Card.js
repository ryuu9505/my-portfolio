import { blackSquare } from '@assets/images';
import Divider from '@components/Divider';
import { StarRatingAnimation } from '@styles/AnimationStyles';
import {
  ContentWrapper,
  HistoryCard,
  HistoryDescription,
  HistoryPeriod,
  HistoryTitle,
  Position,
  TitleWrapper } from '@styles/CommonStyles';
import { RoundedImage, SquareImage } from '@styles/ImageStyles';
import React, { useState } from 'react';
import { FaCertificate } from 'react-icons/fa';
import styled from 'styled-components';

import formatYearMonth, { getPeriodLength, withParentheses } from '@/utils/format';

const StyledTechCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 128px;
  min-height: 128px;
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
    min-height: 100px;
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

export const TechCard = ({ url, name, level }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledTechCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', overflow: 'visible', border: '1px solid #e0e0e0', boxSizing: 'border-box' }}
    >
      <img className="tech-icon" src={url} alt={name} style={{ width: '48px', height: '48px', objectFit: 'contain', marginBottom: 0 }} />
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
  company,
  team,
  position,
  startDate,
  endDate,
  periodNote,
  description,
  masked,
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  const textMaskStyle = masked
  ? {
      background: '#000',
      color: '#000',
      overflow: 'hidden',
      fontSize: '1.5rem',
    }
  : {};
  return (
    <HistoryCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', overflow: 'visible', border: '1px solid #e0e0e0', boxSizing: 'border-box' }}
    >
      <SquareImage
        src={masked ? blackSquare : company.logo?.url}
        alt={company.name}
      />
      <ContentWrapper>
        <TitleWrapper>
          <HistoryTitle style={textMaskStyle}>{company.name}</HistoryTitle>
          <Position>{team}</Position>
        </TitleWrapper>
        <HistoryDescription>{description}</HistoryDescription>
        <HistoryPeriod>
          {formatYearMonth(startDate)} - {endDate ? formatYearMonth(endDate) : '재직 중'} {withParentheses(periodNote ? periodNote : getPeriodLength(startDate, endDate))}
        </HistoryPeriod>
      </ContentWrapper>
    </HistoryCard>
  );
}

const StyledProfileCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  padding: 24px 0 24px 0;
  width: 160px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.2s;
  border: 1.5px solid #e0e0e0;
  box-sizing: border-box;
  &:hover {
    transform: translateY(-8px);
  }
`;

export function ProfileCard({ profileImage, name, username, bio, companyLogos }) {
  return (
    <a
      href={`/${username}`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      <StyledProfileCard>
        <RoundedImage
          src={profileImage?.url || ''}
          alt={profileImage?.altText || username || 'profile'}
          style={{
            width: 64,
            height: 64,
            marginBottom: 0,
            border: '1.5px solid #e0e0e0',
            boxSizing: 'border-box'
          }}
        />
        <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: 4, textAlign: 'center' }}>{username}</div>
        <div style={{ fontWeight: 300, fontSize: '0.9rem', marginTop: 0, textAlign: 'center' }}>{name}</div>
        <div style={{ fontWeight: 300, fontSize: '0.7rem', marginTop: 0, textAlign: 'center', color: '#888' }}>{bio}</div>
        <Divider margin="16px" />
        {companyLogos && companyLogos.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
            {companyLogos.slice(0, 3).map((logo, idx) => (
              <SquareImage
                key={logo?.url || idx}
                src={logo?.url}
                alt={logo?.altText || 'company logo'}
                style={{ width: 30, height: 30, marginRight: 0 }}
              />
            ))}
          </div>
        )}
      </StyledProfileCard>
    </a>
  );
}
