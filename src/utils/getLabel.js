export default function getLabel(icon) {
  if (!icon) return '';
  return icon.charAt(0).toUpperCase() + icon.slice(1);
}
