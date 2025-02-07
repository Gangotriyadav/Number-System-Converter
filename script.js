let input = document.getElementById("input");
let output = document.getElementById("output");

function binaryNumber() {
  let n = input.value;
  let s = " ";
  while (n > 0) {
    r = n % 2;
    s = r + s;
    n = Math.floor(n / 2);
  }
  output.innerHTML = s;
}

function decimalNumber() {
  let n = input.value;
  let s = " ";
  while (n > 0) {
    r = n % 10;
    s = r + s;
    n = Math.floor(n / 10);
  }
  output.innerHTML = s;
}

function octalNumber() {
  let n = input.value;
  let s = " ";
  while (n > 0) {
    r = n % 8;
    s = r + s;
    n = Math.floor(n / 8);
  }
  output.innerHTML = s;
}

function hexaNumber() {
  let n = input.value;
  let s = " ";
  while (n > 0) {
    let r = n % 16;
    if (r == 10) {
      s = "A" + s;
    } else if (r == 11) {
      s = "B" + s;
    } else if (r == 12) {
      s = "C" + s;
    } else if (r == 13) {
      s = "D" + s;
    } else if (r == 14) {
      s = "E" + s;
    } else if (r == 15) {
      s = "F" + s;
    } else {
      s = r + s;
    }
    n = Math.floor(n / 16);
    output.innerHTML = s;
  }
}
