// Write your code below
let input = process.argv[2];
let number = Number(input);
if ((!input || !number || number <= -1) && number !== 0) {
  process.exit();
}
let l = "";
for (let index = 0; index < number; index++) {
  let num = index + 1;
  console.log(`${" ".repeat(number - num)}${num}${l}`);
  l = `${num}${l}`;
}
