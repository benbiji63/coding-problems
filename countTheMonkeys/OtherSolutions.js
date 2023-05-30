function monkeyCount(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

function monkeyCount(n) {
  return [...Array(n + 1).keys()].slice(1);
}

var monkeyCount = (n) => [...Array(n)].map((v, i) => i + 1);
