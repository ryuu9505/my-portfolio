// src/theme.js
const theme = {
  colors: {
    backgroundDark: '#000000',   // 검정 배경
    backgroundGradient: 'linear-gradient(135deg, #1C1C1E, #636366)', // 블루 그라데이션 배경
    backgroundLight: '#FFFFFF',  // 화이트 배경
    textDark: '#FFFFFF',         // 밝은 텍스트 색상
    textLight: '#2A2A2A',        // 진한 그레이 텍스트 색상
    headerBackground: 'rgba(0, 0, 0, 0.85)', // 약간 연한 블랙 헤더 배경 (투명도 적용)
  },
  fonts: {
    primary: 'Helvetica, Arial, sans-serif',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
};

export default theme;