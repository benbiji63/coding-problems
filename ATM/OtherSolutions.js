function solve(n) {
  if (n % 10) return -1
  return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
    let ans = n / v | 0
    n %= v
    return s + ans
  }, 0)
}