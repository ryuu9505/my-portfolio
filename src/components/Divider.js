import styled from 'styled-components';

const DividerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const DividerLine = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #e0e0e0;
  margin: 0 128px;
`;

export default function Divider({ visible = true }) {
  if (!visible) return null;
  return (
    <DividerWrapper>
      <DividerLine />
    </DividerWrapper>
  );
} 