/*

*********
 *     *
  *   *
   * *
    *

*/

function pattern(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n * 2 - 1; col++) {
      row === 1 || col === row || col === n * 2 - row
        ? (result += "*")
        : (result += " ");
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(5));
