/*

*        *
**      **
* *    * *
*  *  *  *
*   **   *
*   **   *
*  *  *  *
* *    * *
**      **
*        *

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n * 2; row++) {
    for (let col = 1; col <= n * 2; col++) {
      const x = col === row || col === n * 2 - row + 1;
      if (col === 1 || col === n * 2 || x) {
        result += "*";
      } else result += " ";
    }
    if (row !== n * 2) result += "\n";
  }
  return result;
}

console.log(pattern(5));
