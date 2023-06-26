function largestPower(n){
  if (n === 1) return [0, -1];
  if (n <= 4) return [1, -1];
  const sum = [];
  for (let i = 2; i * i < n; i ++)
    for (let j = 2; i ** j < n; j++)
      sum.push(i ** j);
  const max = Math.max(...sum);
  return [max, sum.filter(item => item === max).length];
}