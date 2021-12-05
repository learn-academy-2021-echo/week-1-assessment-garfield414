// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.length)

// a) Your answer: The answer is 9
// b) Verify and explain: The computer counts all characters in the string    including the space.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: It will log the letter L
// b) Verify and explain: strings are indexed at zero and counting up to three from zero yields the character "l".


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Arrays are indexed at zero. So at index 1 the value is Ruby.


// --------------------4) What will this log?

//var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: This will generate a stacktrace

// b) Verify and explain:
// You cannot call toUpperCase() on an array, only a string prototype


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: It will return the number type
// b) Verify and explain: dataTypes.length returns a value of "3"; typeof looks at this value and tries to determine its type which is of type Number
