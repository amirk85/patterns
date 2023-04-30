/*
         *
        * *
       *   *
      *     *
     *********

*/

function pattern(n) {
  let result = "";

  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      result += " ";
    }

    const printCol = row === n ? n * 2 - 1 : 1;
    for (let col = 1; col <= printCol; col++) {
      result += "*";
    }

    const middleSpaces = row * 2 - n + 2;
    for (let space = 1; space <= middleSpaces; space++) {
      result += " ";
    }

    for (let col = 1; col <= 1; col++) {
      if (row != n) {
        row !== 1 && (result += "*");
      }
    }

    if (row !== n) result += "\n";
  }
  return result;
}

console.log(pattern(5));
