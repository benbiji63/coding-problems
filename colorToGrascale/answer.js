function rgbToGrayscale(color) {
  let r = parseInt(color.substr(1, 2),16);
  let g = parseInt(color.substr(3, 2),16);
  let b = parseInt(color.substr(5, 2),16);
  let y = Math.round(0.299 * r + 0.587 * g + 0.114 * b).toString(16).padStart(2,'0');
  return `#${y.repeat(3).toUpperCase()}`
}
