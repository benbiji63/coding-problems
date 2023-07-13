// A string  && a char-it's case sensitive
// find its second index of 2nd argument
// ('Hello world!!!','l')=> 3,
// ('Hello world!!!', 'o')=> 7
// ('Hello world!!!', 'A')=> -1
// find indexOf symbol ,with starting position at first occurrence  of symbol +1

function secondSymbol(s, symbol) {
  return s.indexOf(symbol, s.indexOf(symbol));
}
