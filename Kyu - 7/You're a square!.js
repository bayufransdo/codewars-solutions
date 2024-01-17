var isSquare = function (n) {
  if (n < 0) return false;

  let i = 0;
  while (i * i <= n) {
    if (i * i === n) return true;
    if (i * i > n) return false;

    i++;
  }

  return false;
  return false; // fix me
};
