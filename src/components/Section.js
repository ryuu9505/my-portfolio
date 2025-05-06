import {
  Section as StyledSection,
  SectionDescription as StyledSectionDescription,
  SectionTitle as StyledSectionTitle,
} from '@styles/SectionStyles';
import React from 'react';
import { useTheme } from 'styled-components';

export const Section = ({ children, colorScheme = 'default', ...props }) => {
  const theme = useTheme();
  let background, color;

  if (colorScheme === 'dark') {
    background = theme.colors.backgroundDark || '#222';
    color = theme.colors.textDark || '#fff';
  } else if (colorScheme === 'light') {
    background = theme.colors.backgroundLight || '#fff';
    color = theme.colors.textLight || '#222';
  } else {
    background = theme.colors.background || '#fff';
    color = theme.colors.text || '#222';
  }

  return (
    <StyledSection background={background} color={color} {...props}>
      {children}
    </StyledSection>
  );
};

export const SectionTitle = ({
  children,
  colorScheme = 'default',
  ...props
}) => {
  const theme = useTheme();
  let color;

  if (colorScheme === 'dark') {
    color = theme.colors.textDark || '#fff';
  } else if (colorScheme === 'light') {
    color = theme.colors.textLight || '#222';
  } else {
    color = theme.colors.text || '#222';
  }

  return (
    <StyledSectionTitle color={color} {...props}>
      {children}
    </StyledSectionTitle>
  );
};

export const SectionDescription = ({ children, ...props }) => (
  <StyledSectionDescription {...props}>{children}</StyledSectionDescription>
);
