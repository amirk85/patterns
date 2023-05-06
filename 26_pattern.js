/*

1 1 1 1 1 1
2 2 2 2 2
3 3 3 3
4 4 4
5 5
6

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n - row + 1; col++) {
      result += row + " ";
    }

    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(6));
