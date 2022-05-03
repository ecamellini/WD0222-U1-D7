console.log("---------------NUMBERS--------------")

let integer = 200
let floatingPoint = 12.35897
let negative = -13

console.log("Here are an integer, a float, and a negative number:")
console.log(integer)
console.log(floatingPoint)
console.log(negative)

console.log("I divide an integer by a float:")
console.log(15 / 3.33)

console.log("I divide by 0:")
console.log(20 / 0) // It should be impossible...
// But in JS it results Infinity.

console.log("I divide a string by a number:")
console.log("Hello" / 15) // This results NaN (Not a Number)
// It is a value used to represent the result of erroneous number operations.
// When you see NaN, it means that something went wrong...
// For example: at some point in your code, you are dividing a string and a number.
