export default function isEmpty(arr) {
  return !Array.isArray(arr) || arr.length === 0;
}
