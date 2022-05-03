console.log("\n-------------EQUALITY/INEQUALITY/COMPARISON---------------")

// ALWAYS USE === and !==
// NEVER USE == and !=
console.log("Is 56 equal to 20?", 56 === 20)
console.log("Is 35 different from 20?", 35 !== 20)


console.log("Is 45 greater than 20?", 45 > 20)
console.log("Is AAC greater than AAB?", "AAC" > "AAB")
// Other comparison operators: <, >=, <==

console.log("\n-----------COMBINING LOGICAL OPERATORS---------------\n")

// There are three operators that we can use to mix/combine logical statements/booleans
// Not, And, Or operators

console.log("\n------------NOT OPERATOR-------------\n")

let height = 175 // Suppose this value comes from a user input
console.log("Height:", height)

// If you are declaring a variable that will store a boolean...
// Name it as a question. So that just by reading the code you
// clearly understand that it is a boolean.
let isTallerThan175 = height >= 175
console.log("Is the user at least 175 cm?", isTallerThan175)

let isUserShorterThan175 = !isTallerThan175
console.log("Is the user shorter than 175?", isUserShorterThan175)

console.log("\n-------------AND OPERATOR--------------\n")

let eyeColor = "green" // Suppose this value comes from the user, from a form in the webpage
console.log("Eye color:", eyeColor)

let hasBlueEyes = eyeColor === "blue"

/* Suppose that you are building a website to allow users
to apply for castings as actors, in movies/TV shows, etc.
We have a casting where the requirements are:
- blue eyes
- at least 175cm tall
*/

// The AND operator results true only if all values are true, false otherwise
let canTheUserJoinTheCasting = hasBlueEyes && isTallerThan175
//                             (eyeColor === "blue") && (height >= 175)
console.log("\nCan the user join the casting?", canTheUserJoinTheCasting)

console.log("\n-------------OR OPERATOR--------------\n")

// Let's suppose that we add a requirement.
/* The user can join the casting if:
- They have blue eyes OR green eyes AND
- They are taller than 175 AND
- They have blonde OR brown hair
*/

let hairColor = "Brown" // Suppose it comes from the user.
console.log("Hair color:", hairColor)

let hasGreenEyes = eyeColor === "green"

// The OR operator results true only if at least one of the values is true, false otherwise.
// It means that it is false only if all the values are false.
let isHairBlondeOrBrown = hairColor.toLowerCase() === "blonde" || hairColor.toLowerCase() === "brown"
// .toLowerCase() converts a string value into all lowercase, so that we can ignore case sensitiveness

canTheUserJoinTheCasting = (hasBlueEyes || hasGreenEyes) && isTallerThan175 && isHairBlondeOrBrown
                        // (eyeColor === "blue" || eyeColor === "green") && (height > 175) && (hairColor === "blonde" || hairColor === "brown")

console.log("Can the user join the casting now?", canTheUserJoinTheCasting)
