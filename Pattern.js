class Main {
  static pattern1(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n; col++) {
        result += "*";
      }
      if (n !== row) result += "\n";
    }
    return result;
  }

  static pattern2(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= row; col++) {
        result += "*";
      }
      if (n !== row) result += "\n";
    }
    return result;
  }

  static pattern3(n = 5) {
    let result = "";
    for (let row = n; row >= 1; row--) {
      for (let col = 1; col <= row; col++) {
        result += "*";
      }
      if (row !== 1) result += "\n";
    }
    return result;
  }

  static pattern4(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= row; col++) {
        result += col + " ";
      }
      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern5(n = 5) {
    let result = "";
    for (let row = 1; row <= 2 * n - 1; row++) {
      const printCol = row <= n ? row : 2 * n - row;
      for (let col = 1; col <= printCol; col++) {
        result += "*";
      }
      if (row !== 2 * n - 1) result += "\n";
    }
    return result;
  }

  static pattern6(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      // spaces
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

  static pattern7(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      // spaces
      for (let space = 1; space < row; space++) {
        result += " ";
      }

      for (let col = 1; col <= n - row + 1; col++) {
        result += "*";
      }
      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern8(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      // spaces
      for (let space = 1; space <= n - row; space++) {
        result += " ";
      }

      // stars
      for (let col = 1; col <= 2 * row - 1; col++) {
        result += "*";
      }
      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern9(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      // spaces

      for (let space = 1; space < row; space++) {
        result += " ";
      }

      // stars
      const printCol = 2 * n - 2 * row + 1;
      for (let col = 1; col <= printCol; col++) {
        result += "*";
      }
      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern10(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      // spaces

      for (let space = 1; space <= n - row; space++) {
        result += " ";
      }

      // stars
      for (let col = 1; col <= row; col++) {
        result += "* ";
      }
      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern11(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      // spaces

      for (let space = 1; space < row; space++) {
        result += " ";
      }

      // stars
      for (let col = 1; col <= n - row + 1; col++) {
        result += "* ";
      }
      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern12(n = 5) {
    let result = "";
    for (let row = 1; row <= n * 2; row++) {
      // spaces

      const printSpaces = row <= n ? row - 1 : 2 * n - row;

      for (let space = 1; space <= printSpaces; space++) {
        result += " ";
      }

      // stars
      for (let col = 1; col <= n - printSpaces; col++) {
        result += "* ";
      }
      if (row !== n * 2) result += "\n";
    }
    return result;
  }

  static pattern13(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n * 2 - 1; col++) {
        if (row === n || col === n - row + 1 || col === n + row - 1) {
          result += "*";
        } else result += " ";
      }
      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern14(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n * 2 - 1; col++) {
        if (row === 1 || col === row || col === 2 * n - row) {
          result += "*";
        } else result += " ";
      }
      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern15(n = 5) {
    let result = "";
    for (let row = 1; row <= n * 2 - 1; row++) {
      for (let col = 1; col <= n * 2 - 1; col++) {
        if (
          col === n - row + 1 ||
          col === row - n + 1 ||
          col === n + row - 1 ||
          col === n * 2 - row + n - 1
        ) {
          result += "*";
        } else result += " ";
      }
      if (row !== n * 2 - 1) result += "\n";
    }
    return result;
  }

  static pattern17(n = 4) {
    let result = "";
    for (let row = 1; row <= n * 2 - 1; row++) {
      // spaces

      const printSpaces = row <= n ? n - row : row - n;
      for (let space = 1; space <= printSpaces; space++) {
        result += " ";
      }

      // Numbers

      for (let col = n - printSpaces; col >= 1; col--) {
        result += col;
      }

      for (let col = 2; col <= n - printSpaces; col++) {
        result += col;
      }

      if (row !== n * 2 - 1) result += "\n";
    }
    return result;
  }

  static pattern18(n = 5) {
    let result = "";
    for (let row = 1; row <= n * 2; row++) {
      const printCol = row <= n ? n - row + 1 : row - n;
      for (let col = 1; col <= printCol; col++) {
        result += "*";
      }

      // spaces
      for (let space = 1; space <= 2 * (n - printCol); space++) {
        result += " ";
      }

      for (let col = 1; col <= printCol; col++) {
        result += "*";
      }

      if (row !== n * 2) result += "\n";
    }
    return result;
  }

  static pattern19(n = 5) {
    let result = "";
    for (let row = 1; row <= n * 2 - 1; row++) {
      const printCol = row <= n ? row : 2 * n - row;

      // stars
      for (let col = 1; col <= printCol; col++) {
        result += "*";
      }

      // spaces
      for (let space = 1; space <= 2 * (n - printCol); space++) {
        result += " ";
      }

      // stars
      for (let col = 1; col <= printCol; col++) {
        result += "*";
      }
      if (row !== n * 2 - 1) result += "\n";
    }
    return result;
  }

  static pattern20(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n; col++) {
        if (row === 1 || row === n || col === 1 || col === n) {
          result += "*";
        } else result += " ";
      }

      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern21(n = 5) {
    let result = "";
    let num = 1;
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= row; col++) {
        result += num + " ";
        if (num <= 9) result += " ";
        num++;
      }

      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern22(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= row; col++) {
        const num = row + col + 1;
        result += (num % 2) + " ";
      }

      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern23(n = 3) {
    let result = "";

    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n * 2 - 1; col++) {
        col === n - row + 1 || col === n + row - 1
          ? (result += " *")
          : (result += "  ");
      }
      for (let col = 1; col <= n * 2 - 1; col++) {
        (row !== n && col === n - row + 1) || col === n + row - 1
          ? (result += "* ")
          : (result += "  ");
      }

      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern24(n = 5) {
    let result = "";

    for (let row = 1; row <= n * 2; row++) {
      for (let col = 1; col <= n * 2; col++) {
        const printX = col === row || col === 2 * n - row + 1;
        if (printX || col == 1 || col === n * 2) {
          result += "*";
        } else result += " ";
      }

      if (row !== n * 2) result += "\n";
    }
    return result;
  }

  static pattern25(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      // spaces

      for (let space = 1; space <= n - row; space++) {
        result += " ";
      }

      // stars
      for (let col = 1; col <= n; col++) {
        if (row === 1 || row === n || col === 1 || col === n) {
          result += "*";
        } else result += " ";
      }

      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern26(n = 5) {
    let result = "";
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n - row + 1; col++) {
        result += row + " ";
      }

      if (row !== n) result += "\n";
    }
    return result;
  }

  static pattern28(n = 5) {
    let result = "";

    for (let row = 1; row <= n * 2 - 1; row++) {
      // spaces

      const printSpaces = row <= n ? n - row : row - n;
      for (let space = 1; space <= printSpaces; space++) {
        result += " ";
      }

      // stars
      for (let col = 1; col <= n - printSpaces; col++) {
        result += " *";
      }

      if (row !== n * 2 - 1) result += "\n";
    }
    return result;
  }

  static pattern29(n = 5) {
    return this.pattern19(n);
  }
}

console.log(Main.pattern29());
