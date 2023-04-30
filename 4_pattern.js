/*

    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

*/

function pattern4(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      result += `${col} `;
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern4(5));
