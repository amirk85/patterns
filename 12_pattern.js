/*

     * * * * *
      * * * *
       * * *
        * *
         *
         *
        * *
       * * *
      * * * *
     * * * * *

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n * 2; row++) {
    const printSpace = row <= n ? row - 1 : n * 2 - row;
    for (let space = 1; space <= printSpace; space++) {
      result += " ";
    }
    const printCol = row <= n ? n - row + 1 : row - n;
    for (let col = 1; col <= printCol; col++) {
      result += "* ";
    }
    if (row !== n * 2) result += "\n";
  }
  return result;
}

console.log(pattern(5));
