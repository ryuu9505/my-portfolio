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

export const HistoryCard = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  background: ${({ theme }) =>
    theme.colors.card || theme.colors.backgroundLight};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateX(-30px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 88px;
  text-align: left;

  @media (max-width: 480px) {
    min-height: 50px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 0px;

  @media (max-width: 480px) {
    gap: 3px;
    margin-bottom: 0px;
  }
`;

export const HistoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  line-height: 0.9;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 0.9;
  }
`;

export const Position = styled.h4`
  font-size: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  transform: translateY(-1px);

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const HistoryDescription = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  margin-top: 0px;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    line-height: 1.3;
    margin-top: 2px;
    margin-bottom: 6px;
  }
`;

export const HistoryPeriod = styled.span`
  font-size: 0.8rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary}99;
  line-height: 1;
  display: block;

  @media (max-width: 480px) {
    font-size: 0.6rem;
    line-height: 1;
  }
`;

export const ProjectList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  perspective: 1000px;

  @media (max-width: 800px) {
    max-width: 350px;
  }
  @media (max-width: 480px) {
    gap: 30px;
    margin-top: 30px;
    max-width: 95vw;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 0;
  width: ${({ width }) => width || '350px'};
  will-change: transform;
  backface-visibility: hidden;

  @media (max-width: 480px) {
    width: ${({ width }) => width * 0.8 || '300px'};
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const ProjectContent = styled.div`
  padding: 0px;
  text-align: left;

  @media (max-width: 480px) {
    padding: 0px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: ${({ fontSize }) => fontSize || '1.6rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;

  @media (max-width: 480px) {
    font-size: ${({ fontSize }) => fontSize * 0.8 || '1.3rem'};
    font-weight: ${({ fontWeight }) => fontWeight * 0.8 || '560'};
    margin-top: 15px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1.4rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '200'};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;

  @media (max-width: 480px) {
    font-size: ${({ fontSize }) => fontSize * 0.8 || '0.95rem'};
    font-weight: ${({ fontWeight }) => fontWeight * 0.8 || '160'};
    margin: 2px 0;
  }
`;

export const Period = styled.span`
  font-size: 0.8rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary}99;
  line-height: 2.4;
  display: block;

  @media (max-width: 480px) {
    font-size: 0.6rem;
    line-height: 2.4;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  margin-top: 10px;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.textDark};
  }

  p {
    margin-top: 40px;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.2;
    color: inherit;
  }

  small {
    margin-top: 40px;
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 870px;
  margin: 30px auto 0 auto;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 220px;
    gap: 20px;
    margin: 20px auto 0 auto;
  }
`;

export const FilmTrack = styled.div`
  display: flex;
  width: calc(400px * 10);
  will-change: transform;
  transition: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(200px * 10);
  }
`;

export const ThumbnailWrapper = styled.div`
  margin-right: 20px;
  display: inline-block;
  position: relative;
  width: 400px;
  height: 250px;
  vertical-align: top;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    height: 125px;
  }
`;
