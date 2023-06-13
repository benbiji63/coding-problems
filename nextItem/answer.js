function nextItem(xs, item) {
  let  found = false;
  for (var x of xs) {
    if (found) return x;
    if (x == item) found = true;
  }
  return undefined;
}
