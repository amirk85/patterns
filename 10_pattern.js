/*

         *
        * *
       * * *
      * * * *
     * * * * *

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      result += " ";
    }
    for (let col = 1; col <= row; col++) {
      result += "* ";
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(5));
