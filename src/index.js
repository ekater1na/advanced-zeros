module.exports = function getZerosCount(number, base) {
  let zeros = 0;
  let bool = false;
  let tmp = [];
  while (bool === false) {
      for (let i = 2; i <= base; i++) {
          if (base % i === 0 && i !== base) {
              base = base / i;
              tmp.push(i);
              break
          }
          else if (i === base) {
              tmp.push(base);
              bool = true;
          }

      }

  }
  let num = 0;
  for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] === base) {
          num++;
      }

  }

  for (let i = base; number / i >= 1; i = i * base) {
      zeros = zeros + Math.floor(number / i);
  }

  return Math.floor(zeros / num);
}
