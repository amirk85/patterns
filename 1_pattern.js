/*
    *****
    *****
    *****
    *****
    *****

*/

function pattern(n) {
  let result = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      result += "*";
    }
    if (n != row) result += "\n";
  }
  return result;
}

console.log(pattern(5));
