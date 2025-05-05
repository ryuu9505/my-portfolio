import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: white;
  color: ${({ theme, dark }) =>
    dark ? theme.colors.textDark : theme.colors.textLight};
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme, dark }) =>
    dark ? theme.colors.textDark : theme.colors.textLight};
  margin-bottom: 0px;
  text-align: center;
`;

export const SectionDescription = styled.div`
  margin-top: 0px;
  font-size: 1.6rem;
  line-height: 1.2;
  font-weight: 200;
  color: ${({ theme, dark }) =>
    dark ? theme.colors.textDark : theme.colors.secondary};
  margin-bottom: 0px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const WhiteSpace = styled.div`
  height: ${({ size }) => size || '20px'};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: ${({ wrap }) => wrap || 'wrap'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  gap: ${({ gap }) => gap || '20px'};
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${({ gap }) => gap || '20px'};
  width: 100%;
`;

export const Card = styled.div`
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.backgroundDark : theme.colors.backgroundLight};
  border-radius: ${({ radius }) => radius || '0'};
  overflow: hidden;
  box-shadow: ${({ elevation }) =>
    elevation
      ? `0 ${elevation * 2}px ${elevation * 4}px rgba(0, 0, 0, 0.1)`
      : 'none'};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: ${({ hover }) => (hover ? 'translateY(-5px)' : 'none')};
    box-shadow: ${({ hover, elevation }) =>
      hover && elevation
        ? `0 ${elevation * 3}px ${elevation * 6}px rgba(0, 0, 0, 0.15)`
        : 'none'};
  }
`;

export const Container = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || '1200px'};
  width: 100%;
  margin: 0 auto;
  padding: ${({ padding }) => padding || '0 20px'};
`;

export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: ${({ fit }) => fit || 'cover'};
  aspect-ratio: ${({ ratio }) => ratio || 'auto'};
`;

export const Button = styled.button`
  padding: 8px 20px;
  font-size: 0.9rem;
  font-weight: 400;
  border: none;
  border-radius: 999px;
  background: ${({ theme, variant }) =>
    variant === 'secondary'
      ? theme.colors.secondary
      : variant === 'accent'
        ? theme.colors.accent
        : theme.colors.primary};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: ${({ theme }) => theme.breakpoints.mobile} - 20px;
  }
`;

const CommonStyles = {
  Section,
  SectionTitle,
  SectionDescription,
  WhiteSpace,
  FlexContainer,
  GridContainer,
  Card,
  Container,
  ResponsiveImage,
  Button,
  CardList,
};

export default CommonStyles;
