// Write your code below

let number = Number(process.argv.slice(2));


if (!number  || number <= 0) {
  process.exit();
} else {
  for (let index = 0; index < number; index++) {
    let num = index + 1;
    let mod3 = num / 3;
    let mod5 = num / 5;
    var text = "";
    if (mod3 == Math.ceil(mod3)) {
      text += "Fizz";
    }
    if (mod5 == Math.ceil(mod5)) {
      text += "Buzz";
    }
    console.log(!text ? `${index}` : text);
  }
}
