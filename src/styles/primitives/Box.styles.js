import styled from 'styled-components';

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

export const Container = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || '1200px'};
  width: 100%;
  margin: 0 auto;
  padding: ${({ padding }) => padding || '0 20px'};
`;

export const WhiteSpace = styled.div`
  height: ${({ size }) => size || '20px'};
  background-color: ${({ theme }) => theme.colors.background};
`;
