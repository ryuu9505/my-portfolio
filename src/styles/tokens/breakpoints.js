export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '992px',
  wide: '1200px',
};

// 미디어 쿼리 헬퍼
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  wide: `@media (max-width: ${breakpoints.wide})`,
};
