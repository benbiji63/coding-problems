function consonantCount(str) {
  return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
}

const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;