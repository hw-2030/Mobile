function createPerson(name, age, school) {
  return {
    name,
    age,
    school
  }
}

let testResult = createPerson("Taylor", 20, "UVA");

console.log(testResult); // should print the following:
/*
  {
    name: "Taylor",
    age: 20,
    school: "UVA"
  }
  */
