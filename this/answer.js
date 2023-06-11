// Changed return name object  to a property
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = `${this.firstName} ${this.lastName}`
}