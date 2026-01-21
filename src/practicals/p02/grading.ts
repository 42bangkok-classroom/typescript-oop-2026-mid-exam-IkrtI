// Write your code below

let number = Number(process.argv.slice(2));

if ((!number || Number.isNaN(number) || number <= -1) && number !== 0) {
  console.log("Invalid input");
} else if (number <= 49) {
  console.log("Grade is F");
} else if (number <= 59) {
  console.log("Grade is D");
} else if (number <= 69) {
  console.log("Grade is C");
} else if (number <= 79) {
  console.log("Grade is B");
} else if (number <= 100) {
  console.log("Grade is A");
} else {
  console.log("Invalid input");
}
