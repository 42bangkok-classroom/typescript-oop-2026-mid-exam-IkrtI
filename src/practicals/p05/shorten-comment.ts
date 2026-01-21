// Write your code below
const inputzz = process.argv.slice(2);
const numsber = Number(inputzz);

if (numsber < 0) process.exit();
for (let i = 1; i <= numsber; i++) {
  let x = "";
  for (let j = 0; j < numsber - i; j++) {
    x += " ";
  }
  for (let k = i; k >= 1; k--) {
    x += `${k}`;
  }
  console.log(x);
}
