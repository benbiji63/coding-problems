Array.range = function(start, count) {
  return Array.apply(null, Array(count)).map((_, i) => start + i); 
}

Array.prototype.sum = function() {
  return this.reduce((acc, x) => acc + x, 0);
}