//  0 is already a falsy value
Array.prototype.last = function() {
  return this.length ? this[this.length - 1] : -1;
};