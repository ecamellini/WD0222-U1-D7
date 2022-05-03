console.log("---------------NUMBERS--------------\n")

let integer = 200
let floatingPoint = 12.35897
let negative = -13

console.log("\nHere are an integer, a float, and a negative number:")
console.log(integer)
console.log(floatingPoint)
console.log(negative)

console.log("\nI divide an integer by a float:")
console.log(15 / 3.33)

console.log("\nI divide by 0:")
console.log(20 / 0) // It should be impossible...
// But in JS it results Infinity.

console.log("\nI divide a string by a number:")
console.log("Hello" / 15) // This results NaN (Not a Number)
// It is a value used to represent the result of erroneous number operations.
// When you see NaN, it means that something went wrong...
// For example: at some point in your code, you are dividing a string and a number.

console.log("\nModulo operator finds the remainder of the integer division")
console.log(15 % 5) // results 0, why?
// Integer division: how many times can 5 fit into 15 --> 3 times
// And how much do we miss to reach 15? 5*3 is 15, so we miss 0.

console.log(9 % 2) // results 1

console.log("\n-----------------STRINGS-------------------\n")

let string = "This is a string"
let anotherString = 'This is also a string'
let yetAnotherString = `This too...`

console.log(string)
console.log(anotherString)
console.log(yetAnotherString)

// If you need to use single quote inside the string, delimit it using " or `
console.log("Today it's the 3rd of May")
// The opposite is true...

// Escape sequence: ignore the special effect that a character normally has
console.log("In JS, strings can be delimited using \", \', and \`")

// But also, you can use escape sequences to represent some special characters as well.
// For example, \n represents the character "new line", it goes on a new line
console.log("This is the first line.\nThis is the second line.")

let firstString = "This is"
let secondString = "a string obtained using concatenation."
console.log(firstString + " " + secondString)

console.log("+ operator on mixed types: automatic conversion to string")
console.log("Eiffel" + 65)
console.log("345" + 5)
// THIS COULD LEAD TO ERRORS, TRY TO AVOID USING + on MIXED TYPES

console.log("\n-----------------BOOLEAN-------------------\n")

console.log("Boolean values:")
console.log(true)

let anotherBoolean = false
console.log(anotherBoolean)

console.log("\n-----------------LOOSE TYPING-------------------\n")

// In a loosely typed programming language like JS
// variables are not declared to be of a specific type.
// Type can also change overtime.
let thisIsAVariable = 1232
console.log("The variable contains a number:")
console.log(thisIsAVariable)

thisIsAVariable = "Now this is a string..."
console.log(thisIsAVariable)

// MY SUGGESTION IS TO AVOID THIS.
// NEVER, NEVER, assign values of a different type to the same variable.
// Do not mix data types, otherwise, your code could result in unexpected errors.
