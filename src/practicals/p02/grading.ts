const inputz = process.argv.slice(2);
const numberz = Number(inputz);

if (numberz < 0 || numberz > 100) {
  console.log("Invalid input");
} else if (numberz <= 49) {
  console.log("Grade is F");
} else if (numberz <= 59) {
  console.log("Grade is D");
} else if (numberz <= 69) {
  console.log("Grade is C");
} else if (numberz <= 79) {
  console.log("Grade is B");
} else if (numberz <= 100) {
  console.log("Grade is A");
} else {
  console.log("Invalid input");
}
