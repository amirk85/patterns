/*

    *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row < n * 2; row++) {
    const printCol = row < n ? row : n * 2 - row;
    for (let col = 1; col <= printCol; col++) {
      result += "*";
    }
    if (row !== n * 2 - 1) result += "\n";
  }
  return result;
}

console.log(pattern(5));
