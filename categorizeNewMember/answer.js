// p: A nested array of integers which is a pair for the person's age and an integer for the person's handicap
// r: Return senior if age>=55 and handicap>7 else return junior
function openOrSenior(data){
  return data.map(memberDetails=> memberDetails[0]>=55&&memberDetails[1]>7?'Senior':'Open')
}