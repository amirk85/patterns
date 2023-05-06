/*

4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4

*/

function pattern(n) {
  let result = "";
  let c = 2 * n;
  for (let row = 1; row < c; row++) {
    // numbers
    for (let col = 1; col < c; col++) {
      const num = n + 1 - fMin(row, col, c - row, c - col);
      result += num + " ";
    }
    if (row !== c - 1) result += "\n";
  }
  return result;
}

function fMin(...arr) {
  let min = arr[0];
  for (let i = 1; i <= arr.length; i++) arr[i] < min && (min = arr[i]);
  return min;
}

console.log(pattern(4));
