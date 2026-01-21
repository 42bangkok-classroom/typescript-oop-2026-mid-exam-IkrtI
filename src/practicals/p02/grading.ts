// Write your code below
const input = process.argv.slice(2)
const number = Number(input)
if (number >= 0 && number <= 49) {
    console.log("Grade is F")
} else if (number >= 0 && number <= 59) {
    console.log("Grade is D")
} else if (number >= 0 && number <= 69) {
    console.log("Grade is C")
} else if (number >= 0 && number <= 79) {
    console.log("Grade is B")
} else if (number >= 0 && number <= 100) {
    console.log("Grade is A")
} else {
    console.log("Invalid input")
}