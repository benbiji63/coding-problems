function f(value, {a, b, c}) { 
  return {
    [a]: b,
    [b]: c,
    [c]: a,
  }[value]
}