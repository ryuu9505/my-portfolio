import styled from 'styled-components';

// 섹션 전체 컨테이너
export const TechStackSection = styled.section`
  width: 100%;
  padding: 0px 40px;
  padding-top: 80px;
  padding-bottom: 240px;
  position: relative;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: url('/star-textures/Atmo_Fstar.png');
    background-repeat: repeat-x;
    background-size: auto 143%; // 70%만 보이도록 크기를 약 143%(100/0.7)로 설정
    background-position: top center; // 위쪽부터 시작
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
    transform: scaleY(-1);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

// 제목 스타일
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0px;
`;


// 텍스트 컨텐츠 스타일
export const TextContent = styled.div`
    margin-top: 0px;
    font-size: 1.6rem;
    line-height: 1.2;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0px;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
`;

// 기술 스택 리스트 스타일
export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 30px;
  }
`;

// 기술 카드 스타일
export const TechCard = styled.div`
  background-color: white;
  border-radius: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 150px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 480px) {
    width: 80px;
    padding: 12px;
  }
`;

// 기술 아이콘 스타일
export const TechIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0px;

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: -4px;
  }
`;

// 기술 이름 스타일
export const TechName = styled.h3`
  font-size: 1.0rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.textLight};

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
