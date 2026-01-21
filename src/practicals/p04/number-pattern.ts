// Write your code below
const input = process.argv.slice(2)
const number = Number(input)

if (number > 0) process.exit();

let l = "";
for (let index = 0; index < number; index++) {
  let num = index + 1;
  console.log(`${" ".repeat(number - num)}${num}${l}`);
  l = `${num}${l}`;
}
