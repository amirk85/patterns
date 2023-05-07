/*

* * * * *
 * * * *
  * * *
   * *
    *

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= row - 1; space++) {
      result += " ";
    }
    for (let col = 1; col <= n - row + 1; col++) {
      result += "* ";
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(5));
