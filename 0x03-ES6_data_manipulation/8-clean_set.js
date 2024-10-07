export default function cleanSet(set, startString) {
  if (!set || !startString) return '';

  const strings = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      strings.push(item.slice(startString.length));
    }
  }

  return strings.join('-');
}
