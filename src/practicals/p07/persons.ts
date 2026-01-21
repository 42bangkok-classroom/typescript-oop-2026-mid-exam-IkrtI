interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export function sortPersons(personsArr: Person[]): Person[] {
  let arr = []
  for (let index = 0; index < personsArr.length; index++) {
    const { firstName, lastName, age } = personsArr[index];
    if (!firstName || !lastName || !age) continue;
    if (age < 0|| age > 100) continue;
    arr.push(personsArr[index])
  }
  return arr;
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 },
];
