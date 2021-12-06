// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp = 42
// var temp = 350
// var temp = 212

const messages = {
  below_boiling: "below boiling point",
  above_boiling: "above boiling",
  at_boiling: "at boiling point"
};

const temperature = 42;

if (temperature == 212) {
  console.log(messages.at_boiling);
} else if (temperature >= 350) {
  console.log(messages.above_boiling);
} else {
  console.log(messages.below_boiling);
}
/* I made a messages object to be able to reference the temperature log statements
   and wrote three conditionals to accomadate for a given temper (e.g., "42")

*/

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]

const newArray = myNumbers1.concat(myNumbers2);
console.log(newArray.length);

/* I created a new array by using the concat method on the two given arrrays and called the length method. */


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

var currentCohort = "Echo 2021"

const tokens = currentCohort.split("");
console.log(tokens.reverse().join(''));

/* I had to convert the string into an array so that I could reverse it and join it back into a string...
*/


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]

for (let i  = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

/*
 I looped throuugh each value and I checked to see if the value was odd or even and logged the message to the screen.

*/

// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

var number1 = 58;
var number2 = 100;

var number3 = 27;
var number4 = 24;

if (number1 > number2) {
  console.log(number1 - number2);
} else {
  console.log(number2 - number1);
}

if (number3 > number4) {
  console.log(number3 - number4);
} else {
  console.log(number4 - number3);
}
/*
I checked to see which number was larger than the other and subtracted the smaller number from the larger number.

*/
