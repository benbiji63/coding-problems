var  stringy = size => "10".repeat(size).slice(0,size);
var  stringy = x => ''.padStart(x,'10');
var stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');
function stringy(size) {
  return new Array(size).join('10').substr(0,size)   
}