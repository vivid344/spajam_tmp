export function changeEm(value) {
  return value.replace(/[A-Za-z0-9]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) + 65248);
  });
}
