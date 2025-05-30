export default function formatYearMonth(dateStr, separator = '.') {
  if (!dateStr) return '';
  const [year, month] = dateStr.split(/[-\/.]/);
  if (!year || !month) return '';
  return `${year}${separator}${month}`;
}

export function withParentheses(str) {
  return str ? `(${str})` : '';
} 