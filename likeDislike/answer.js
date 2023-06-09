// Like, Dislike, Nothing come from Preloaded

function toggleString(something, string1, string2) {
  return something === string1 && string2 || string1;
}
function likeOrDislike(buttons) {
  let returnValue = 'Nothing';
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === buttons[i - 1]) {
      returnValue = toggleString(returnValue,buttons[i],'Nothing')
    }
    else{
      returnValue = buttons[i]
    }
  }
  return returnValue;
}
