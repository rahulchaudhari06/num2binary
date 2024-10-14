// number
// divide it with 2 until its zero
// the remainders from bottom to top make up the binary

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number to convert to binary:", (input) => {
  let number = parseInt(input);
  let arr = [];

  while (number != 0) {
    a = number % 2;
    arr.push(a);
    number = Math.floor(number / 2);
    continue;
  }
  arr.reverse();
  console.log(arr.join(""));

  rl.close();
});
