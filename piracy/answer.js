class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    const value = draft - this.crew * 1.5;
    return value > 20 ? true : false;
  }
}

function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
  this. isWorthIt  = function() {
    const value = draft - this.crew * 1.5;
    return value > 20 ? true : false;
  }
}
