// Write your code below
const inpuat = process.argv.slice(2)
const nuamber = Number(inpuat)

if (nuamber < 0) {
let l = "";
for (let index = 0; index < nuamber; index++) {
  let num = index + 1;
  console.log(`${" ".repeat(nuamber - num)}${num}${l}`);
  l = `${num}${l}`;
}
}