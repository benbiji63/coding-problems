var filter = function (arr, fn) {
  return arr.reduce((acc, ele,ind) => {
    if (fn(ele,ind)) {
      acc.push(ele);
    }
    return acc;
  }, []);
};