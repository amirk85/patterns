/*

**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n * 2; row++) {
    for (let col = 1; col <= n * 2; col++) {
      if (row <= n) {
        col <= n - row + 1 || col >= row + n
          ? (result += "*")
          : (result += " ");
      } else {
        col <= row - n || col >= n * 2 - row + n + 1
          ? (result += "*")
          : (result += " ");
      }
    }
    if (row !== n * 2) result += "\n";
  }

  return result;
}

console.log(pattern(5));
