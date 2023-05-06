/*

        1
      2 1 2
    3 2 1 2 3
  4 3 2 1 2 3 4
5 4 3 2 1 2 3 4 5

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    // spaces
    for (let space = 1; space <= n - row; space++) {
      result += "  ";
    }

    // numbers

    for (let col = row; col >= 1; col--) {
      result += col + " ";
    }

    for (let col = 2; col <= row; col++) {
      result += col + " ";
    }

    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(5));
