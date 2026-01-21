function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  let arr = [];
  arr = arr1.filter((a) => !arr2.includes(a));
  arr2.filter((a) => !arr1.includes(a)).forEach(a=>arr.push(a))
  return arr.sort();
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(getUniqueNumbers(arr1, arr2));
