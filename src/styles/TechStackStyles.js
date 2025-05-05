import styled from 'styled-components';

export const TechStackSection = styled.section`
  width: 100%;
  padding: 0px 20px;
  padding-top: 80px;
  padding-bottom: 240px;
  background-color: white;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  overflow: hidden;
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
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 150px));
  gap: 30px;
  margin-top: 30px;
  width: 100%;
  max-width: 660px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, minmax(0, 100px));
    gap: 20px;
    margin-top: 20px;
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
    width: 100px;
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
  font-size: 1rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.textLight};

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

// 인증 배지 리스트 스타일
export const CertList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0px;
  margin-top: 36px;
  margin-bottom: 0px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 0px;
    margin-top: 20px;
  }
`;

// 인증 배지 이미지 스타일
export const CertBadge = styled.img`
  height: 150px;
  width: auto;
  object-fit: contain;
  border-radius: 12px;
  background: #fff;
  padding: 4px 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 480px) {
    height: 100px;
    padding: 2px 4px;
  }
`;
