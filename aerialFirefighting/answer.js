// a string with 'X' and'y' that represents fire and building , a positive number representing range of waterbomb
// return the number of waterbombs required to extinguish the fire
// split string when there is a building , add the length of each section if fire by w to count
function waterbombs(fire, w) {
  let count = 0;
  let fireSections = fire.split('Y');
  count = fireSections.reduce(
    (acc, section) => (acc += Math.ceil(section / w)),
    0
  );
  return count;
}

const waterbombs = (fire, w) =>
  fire.split('Y').reduce((acc, section) => (acc += Math.ceil(section / w)), 0);
