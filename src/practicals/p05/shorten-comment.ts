// Write your code below
const input = process.argv.slice(2);
const number = Number(input);

if (number < 0) return;
for (let i = 1; i <= number; i++) {
  let x = "";
  for (let j = 0; j < number - i; j++) {
    x += " ";
  }
  for (let k = i; k >= 1; k--) {
    x += `${k}`;
  }
  console.log(x);
}
