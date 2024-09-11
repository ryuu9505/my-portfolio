import styled from 'styled-components';

// 섹션 전체 컨테이너
export const TechStackSection = styled.section`
  width: 100%;
  padding: 300px 20px;
  background-image: url('/star-textures/Atmo_Gstar.png'); // 배경 이미지 경로 설정
  background-size: cover; // 배경 이미지가 섹션을 덮도록 설정
  background-position: center; // 배경 이미지 위치 조정
  background-repeat: no-repeat; // 배경 이미지가 반복되지 않도록 설정
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

// 제목 스타일
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
`;

// 기술 스택 리스트 스타일
export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

// 기술 카드 스타일
export const TechCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 150px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

// 기술 아이콘 스타일
export const TechIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 10px;
`;

// 기술 이름 스타일
export const TechName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;