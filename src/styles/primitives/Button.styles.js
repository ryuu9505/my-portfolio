import styled from 'styled-components';

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
