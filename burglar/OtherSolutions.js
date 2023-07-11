const diamondBurglar = locker => {
  return locker.join('.').match(/\*{1,2}/g).length;
};
