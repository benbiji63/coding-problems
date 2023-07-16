// String on containing parenthesis 
// If the order of parenthesis true or false

// ()=>true
// ())=>false

// reverse the string , if the characters  at same index of parent and reversed string are same else true
// didn't work
function validParentheses(parenStr) {
  let returnVal = true; 
  if(parenStr[0]===')' || parenStr.length /2 !==0)return false;
  const revStr = parenStr.split('').reverse();
  return parenStr.split('').forEach((char,i) => {
    if(char===revStr[i]) returnVal = false;
  });
}


