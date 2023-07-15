// a string with 'C' indicating cats and 'm' indicating mouse and '.' to represent distance between them,case insensitive , '.' will be between 'C' and 'm'

// return 'Caught' if gap between cat and mouse is <= 3 else 'Escaped!'
const catMouse = x =>
  x.indexOf('m') - x.indexOf('C') - 1 <= 3 ? 'Caught!' : 'Escaped!';

console.log(catMouse('C...m'), 'Caught!');
console.log(catMouse('C..m'), 'Caught!');
console.log(catMouse('C....m'), 'Escaped!');
console.log(catMouse('C.....m'), 'Escaped!');
