/*

    *       *
  *   *   *   *
*       *       *

*/

function pattern(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n * 2 - 1; col++) {
      col === n - row + 1 || col === n + row - 1
        ? (result += " *")
        : (result += "  ");
    }
    for (let col = 1; col <= n * 2 - 1; col++) {
      (row !== n && col === n - row + 1) || col === n + row - 1
        ? (result += "* ")
        : (result += "  ");
    }

    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(3));
