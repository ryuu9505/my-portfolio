import styled from 'styled-components';

// 섹션 전체 컨테이너
export const AboutSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;  // 중앙 정렬
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.colors.backgroundDark}; // 검정 배경
  color: ${({ theme }) => theme.colors.textDark}; // 밝은 텍스트 색상
`;

// 섹션 내용 컨테이너
export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

// 프로필 이미지 스타일
export const ProfileImage = styled.img`
  width: 300px;  // 이미지 크기 설정
  height: 300px;
  border-radius: 50%;  // 원형 이미지
  object-fit: cover;
  margin: 0;  // 가운데 정렬을 위해 여백 제거
`;

// 텍스트 컨텐츠 스타일
export const TextContent = styled.div`
  max-width: 600px;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-top: 20px;
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }
`;