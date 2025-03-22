import styled from 'styled-components';

// 섹션 전체 컨테이너 스타일
export const ProjectsSection = styled.section`
  width: 100%;
  padding: 0px 20px;
  padding-top: 80px;
  padding-bottom: 240px;
  background-color: ${({ theme }) => theme.colors.background}; // 화이트 배경
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight}; // 진한 그레이 텍스트 색상
  overflow: hidden; // 애니메이션 중 오버플로우 방지
`;

// 섹션 제목 스타일
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 00px;
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

// 프로젝트 리스트 스타일
export const ProjectList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  perspective: 1000px;

  @media (max-width: 480px) {
    gap: 30px;
    margin-top: 30px;
  }
`;

// 프로젝트 카드 스타일
export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0;
  width: 350px;
  will-change: transform;
  backface-visibility: hidden;

  @media (max-width: 480px) {
    width: 300px;
  }
`;

// 이미지 컨테이너 추가
export const ProjectImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 10 / 7;
  overflow: hidden;
  position: relative;
  border-radius: 0;
`;

// 프로젝트 이미지 스타일 업데이트
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
`;

// 프로젝트 내용 스타일
export const ProjectContent = styled.div`
  padding: 0px;
  text-align: left;

  @media (max-width: 480px) {
    padding: 0px;
  }
`;

// 프로젝트 제목 스타일
export const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-top: 8px;
  }
`;

// 프로젝트 설명 스타일
export const ProjectDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin: 6px 0;
  }
`;

// 도메인 스타일
export const ProjectDomain = styled.a`
  display: block;
  font-size: 0.9rem;
  color: #646464;
  margin: 0;
  text-decoration: underline;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  &:hover {
    color: #000000
  }
`;

// 도메인 및 아이콘을 감싸는 컨테이너 스타일
export const ProjectLinksContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;
  justify-content: flex-start;
`;

// 프로젝트 링크 스타일
export const ProjectLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    transform: translateY(0px);
  }
`;

// 프로젝트 태그를 감싸는 컨테이너 스타일
export const ProjectTagsContainer = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

// 프로젝트 태그 스타일
export const ProjectTag = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: default;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 2px 6px;
  }

  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(0px);
  }
`;