function NameMe(first, last) {
  this.firstName = first
  this.lastName = last
}

NameMe.prototype = {
  get name() {
    return this.firstName + " " + this.lastName
  }
}