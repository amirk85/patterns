/*

*********
 *******
  *****
   ***
    *

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= row - 1; space++) {
      result += " ";
    }
    const printCol = n * 2 - row * 2 + 1;
    for (let col = 1; col <= printCol; col++) {
      result += "*";
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(5));
