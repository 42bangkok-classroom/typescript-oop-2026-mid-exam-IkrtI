// Write your code below
let number = Number(process.argv.slice(2));

if ((!number || Number.isNaN(number) || number <= -1) && number !== 0) {
  process.exit();
}
let l = "";
for (let index = 0; index < number; index++) {
  let num = index + 1;
  console.log(`${" ".repeat(number - num)}${num}${l}`);
  l = `${num}${l}`;
}
