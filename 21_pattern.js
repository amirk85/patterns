/*

1
2  3
4  5  6
7  8  9  10
11 12 13 14 15

*/

function pattern(n) {
  let result = "";
  let i = 0;
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      i++;
      result += i + " ";
      if (row <= 4) {
        result += " ";
      }
    }

    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(5));
