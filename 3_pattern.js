/*

    *****
    ****
    ***
    **
    *

*/

function pattern2(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let col = row; col <= n; col++) {
      result += "*";
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern2(5));
