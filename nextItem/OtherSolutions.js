function nextItem (seq, item) {
  const iterator = seq[Symbol.iterator]();
  for (let i of iterator) {
    if (i == item) return iterator.next().value;
  }
}