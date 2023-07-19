function toDayOfYear(arr) {
  let day = 0;
  for (i = 1; i <= arr[1]; i++) {
    if (i === 2) {
      if ((arr[1] % 4 && !arr[1] % 100) || arr[1] % 400) day += 29;
      else day += 28;
    } else if (i % 2 === 0) day += 30;
    else day += 31;
  }
  return day;
}
console.log(toDayOfYear([25, 12, 2017]))
console.log(toDayOfYear([1, 5, 3000]),121)
console.log(toDayOfYear(toDayOfYear([31, 12, 2000]), 366))
console.log(toDayOfYear([31, 12, 2100]), 365)