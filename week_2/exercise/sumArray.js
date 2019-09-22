function sumArray(arrayOfInts) {
  let sum = 0;
  arrayOfInts.forEach(num => {
    sum += num;
  });
  return sum;
}

testData = [4, 6, 1, -24];

console.log(sumArray(testData)); // should print -13
