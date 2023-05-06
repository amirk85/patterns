/*

     *
    **
   ***
  ****
 *****


*/

function patternExample1(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      result += " ";
    }
    for (let col = 1; col <= row; col++) {
      result += "*";
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(patternExample1(5));

function patternExample2(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      col >= n - row + 1 ? (result += "*") : (result += " ");
    }
    if (row !== n) result += "\n";
  }
  return result;
}

console.log(patternExample2(5));
