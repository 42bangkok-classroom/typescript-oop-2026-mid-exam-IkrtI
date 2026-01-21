// Write your code below

const inputa = process.argv.slice(2);
const numbera = Number(inputa);

for (let index = 0; index < numbera; index++) {
  let num = index + 1;
  let mod3 = num % 3 == 0;
  let mod5 = num % 5 == 0;
  var text = "";
  if (mod3) text += "Fizz";
  if (mod5) text += "Buzz";
  console.log(!text ? `${index}` : text);
}
