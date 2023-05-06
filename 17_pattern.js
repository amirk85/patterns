/*

   1
  212
 32123
4321234
 32123
  212
   1

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n * 2; row++) {
    const printCol = row <= n ? row : 2 * n - row;
    for (let space = 1; space <= n - printCol; space++) {
      result += "  ";
    }
    // numbers
    for (let col = printCol; col >= 1; col--) {
      result += col + " ";
    }

    for (let col = 2; col <= printCol; col++) {
      result += col + " ";
    }

    if (row !== n * 2) result += "\n";
  }
  return result;
}

console.log(pattern(4));
