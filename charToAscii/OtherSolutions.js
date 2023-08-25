const charToAscii = string => {
  string = string.replace(/[^0-9a-z]/gi, '');
  return string ? [...string].reduce((h, c) => (h[c] = c.charCodeAt(0), h), {}) : null;
}