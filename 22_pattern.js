/*

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let col = row; col >= 1; col--) {
      result += col % 2;
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(5));
