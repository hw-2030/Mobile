// declare the function (note any code you write here won't run until we call the function below)
/*
"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” 
instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples 
of both three and five print “FizzBuzz”."
*/

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let fzb = "";
    if (i % 3 === 0) {
      fzb = fzb + "Fizz";
    }
    if (i % 5 === 0) {
      fzb = fzb + "Buzz";
    }
    if (fzb.length === 0) {
      fzb = " " + i;
    }
    console.log(fzb);
  }
}

// ...and here, we actually CALL the function
fizzbuzz();