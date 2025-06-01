export default function formatYearMonth(dateStr, separator = '.') {
  if (!dateStr) return '';
  const [year, month] = dateStr.split(/[-\/.]/);
  if (!year || !month) return '';
  return `${year}${separator}${month}`;
}

export function withParentheses(str) {
  return str ? `(${str})` : '';
}

export function formatDate(dateStr, separator = '.') {
  if (!dateStr) return '';
  const [datePart] = dateStr.split('T');
  if (!datePart) return '';
  const [year, month, day] = datePart.split(/[-\/.]/);
  if (!year || !month || !day) return '';
  return `${year}${separator}${month.padStart(2, '0')}${separator}${day.padStart(2, '0')}`;
} 