import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  padding: 80px 20px 240px 20px;
  background: ${({ background, theme }) =>
    background || theme.colors.background};
  text-align: center;
  color: ${({ color, theme }) => color || theme.colors.textLight};
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0;
`;

const SectionDescription = styled.div`
  margin-top: 0;
  font-size: 1.6rem;
  line-height: 1.2;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0;
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const SectionLayout = ({
  title,
  description,
  children,
  background,
  color,
  id,
  ...rest
}) => (
  <Section background={background} color={color} id={id} {...rest}>
    {title && <SectionTitle>{title}</SectionTitle>}
    {description && <SectionDescription>{description}</SectionDescription>}
    {children}
  </Section>
);

export default SectionLayout;
