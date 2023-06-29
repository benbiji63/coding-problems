// Solution using regex
const sortMyString = s => s.replace(/(.)./g, '$1') + ' ' + s.replace(/.(.)?/g, '$1')
// Splitting using spread operator 
function sortMyString(S) {
  const even = [...S].filter((v, i) => !(i % 2));
  const odd = [...S].filter((v, i) => i % 2);
  return [...even, " ", ...odd].join("");
}