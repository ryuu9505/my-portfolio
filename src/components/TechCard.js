import React from 'react';
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
    transform: translateY(-10px);
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

const TechCard = ({ icon, name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <StyledTechCard>
        <span className="tech-icon">{icon}</span>
        <span className="tech-name">{name}</span>
      </StyledTechCard>
    </a>
  );
};

export default TechCard;
