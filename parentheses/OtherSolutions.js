function validParentheses(parenStr) {
  let count = 0;
  return (
    parenStr
      .split("")
      .map((ele) => (ele === "(" ? count++ : count--))
      .filter((ele) => ele < 0).length === 0 && count === 0
  );
}

function validParentheses(parenStr) {
  let parsedString = parenStr.split("()").join('')
  if (parsedString.includes('()'))
    return validParentheses(parsedString)
  return !parsedString.length
}