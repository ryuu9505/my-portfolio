import {
  Section as StyledSection,
  SectionDescription as StyledSectionDescription,
  SectionTitle as StyledSectionTitle,
} from '@styles/SectionStyles';
import React from 'react';

export const Section = ({ children, ...props }) => (
  <StyledSection {...props}>{children}</StyledSection>
);

export const SectionTitle = ({ children, ...props }) => (
  <StyledSectionTitle {...props}>{children}</StyledSectionTitle>
);

export const SectionDescription = ({ children, ...props }) => (
  <StyledSectionDescription {...props}>{children}</StyledSectionDescription>
);
