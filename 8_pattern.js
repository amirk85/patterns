/*

        *
       ***
      *****
     *******
    *********

*/

function pattern8(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      result += " ";
    }
    for (let col = 1; col <= row * 2 - 1; col++) {
      result += "*";
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern8(5));