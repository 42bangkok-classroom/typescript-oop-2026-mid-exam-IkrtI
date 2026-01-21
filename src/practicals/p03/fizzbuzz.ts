// Write your code below

const inputa = process.argv.slice(2);
const numbera = Number(inputa);

for (let index = 1; index <= numbera; index++) {
  let mod3 = index % 3 == 0;
  let mod5 = index % 5 == 0;
  var text = "";
  if (mod3) text += "Fizz";
  if (mod5) text += "Buzz";
  console.log(!text ? index : text);
}
