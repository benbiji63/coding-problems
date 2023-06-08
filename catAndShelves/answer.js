function solution(start, finish) {
  const difference = finish - start;
  const threeSteps = Math.floor(difference/3);
  const oneSteps = difference%threeSteps;
  return threeSteps+oneSteps;
}