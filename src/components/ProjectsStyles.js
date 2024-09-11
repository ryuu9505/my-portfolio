import styled from 'styled-components';

// 섹션 전체 컨테이너 스타일
export const ProjectsSection = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: ${({ theme }) => theme.colors.background}; // 화이트 배경
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight}; // 진한 그레이 텍스트 색상
`;

// 섹션 제목 스타일
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 40px;
`;

// 프로젝트 리스트 스타일
export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

// 프로젝트 카드 스타일
export const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// 이미지 컨테이너 추가
export const ProjectImageContainer = styled.div`
  width: 100%;  // 부모 요소의 너비를 100%로 설정
  aspect-ratio: 3 / 1;  // 컨테이너의 비율을 3:1로 설정
  overflow: hidden;  // 이미지가 넘치지 않도록 숨김
  position: relative;  // 포지션을 상대적으로 설정하여 자식 요소 위치 조정
`;

// 프로젝트 이미지 스타일 업데이트
export const ProjectImage = styled.img`
  width: 100%;  // 이미지의 너비를 컨테이너에 맞춤
  height: 100%;  // 이미지 높이를 컨테이너에 맞춤
  object-fit: cover;  // 이미지가 비율에 맞게 잘리도록 설정
  position: absolute;  // 이미지 위치를 절대값으로 설정하여 컨테이너에 맞춤
  top: 0;
  left: 0;
  border-radius: 8px 8px 0 0;
`;

// 프로젝트 내용 스타일
export const ProjectContent = styled.div`
  padding: 20px;
  text-align: left;
`;

// 프로젝트 제목 스타일
export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0px;
`;

// 프로젝트 설명 스타일
export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

// 도메인 및 아이콘을 감싸는 컨테이너 스타일
export const ProjectLinksContainer = styled.div`
//   align-items: center;  // 수직 정렬
//   margin: 8px 0;  // 위아래 여백 설정
`;

// 도메인 스타일
export const ProjectDomain = styled.a`
  display: inline;
  font-size: 0.9rem; // 도메인 주소의 글씨 크기 설정
  color: #646464;
  margin-bottom: 10px;
  text-decoration: underline;

  &:hover {
    color: #000000
  }
`;

// 프로젝트 링크 스타일
export const ProjectLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  margin-right: 4px;
  margin-top: 8px;
  &:hover {
    // text-decoration: underline;
  }
`;
