/*


    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
         
         
*/

function pattern(n) {
  let result = "";

  for (let row = 1; row <= n * 2 - 1; row++) {
    for (let col = 1; col <= n; col++) {
      if (row <= n) {
        col >= n - row + 1 ? (result += "* ") : (result += " ");
      } else {
        col >= row - n + 1 ? (result += "* ") : (result += " ");
      }
    }
    if (row !== n * 2 - 1) result += "\n";
  }
  return result;
}

console.log(pattern(5));
