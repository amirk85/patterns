/*

1      1
12    21
123  321
12344321

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += col;
    }

    // spaces
    for (let space = 1; space <= 2 * n - 2 * row; space++) {
      result += " ";
    }

    for (let col = row; col >= 1; col--) {
      result += col;
    }

    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(4));
