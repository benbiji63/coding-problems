function toDayOfYear(arr) {
  for (var i = 1; i < arr[1]; i++)
    arr[0] += new Date(arr[2], i, 0).getDate();
  return arr[0];
}

