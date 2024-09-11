import styled from 'styled-components';

// 헤더 컨테이너 스타일
export const HeaderContainer = styled.header`
  width: 100%;
  height: 44px;  // 더 얇은 헤더 높이 설정
  background-color: ${({ theme }) => theme.colors.headerBackground};  // 약간 투명한 블랙 배경
  display: flex;
  align-items: center;
  justify-content: center;  // 네비게이션을 가운데로 정렬
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);  // 배경 흐림 효과 적용
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);  // 얇은 경계선
`;

// 로고 스타일
export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

// 네비게이션 메뉴 스타일
export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;  // 메뉴 항목 간의 간격 설정
`;

// 네비게이션 링크 스타일
export const NavLink = styled.a`
  color: #F5F5F7;  // Apple 스타일의 부드러운 흰색
  font-size: 0.85rem;  // Apple 스타일의 작은 글씨체
  font-weight: 300;  // Apple 스타일의 얇은 글씨체
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;  // Apple 스타일의 글씨체
  cursor: pointer;
  text-transform: none;  // 대문자로 변환하지 않음
  letter-spacing: 0.5px;  // Apple 스타일의 자간 설정
  display: flex;
  align-items: center;

  &:hover {
    color: #AAAAAA;  // Apple 스타일의 부드러운 회색으로 호버 효과 설정
  }
`;

// 모바일 메뉴 아이콘 스타일
export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
`;