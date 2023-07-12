function fib(num, pre = []) {
  if (num < 2) return num;
  if (pre[num]) pre[num];

 pre[num]= fib(num - 2, pre)+fib(num - 1, pre);
 return pre[num]
}
