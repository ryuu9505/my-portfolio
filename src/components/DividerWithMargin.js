import styled from 'styled-components';

const DividerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const DividerLine = styled.div`
  width: 100%;
  max-width: 935px;
  border-bottom: 1px solid #dbdbdb;
  margin: 0 16px;
`;

export default function DividerWithMargin() {
  return (
    <DividerWrapper>
      <DividerLine />
    </DividerWrapper>
  );
} 