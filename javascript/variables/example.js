// Using var (function scoped, can be redeclared)
var language = "JavaScript";
console.log("Language (var):", language);

var language = "Python";
console.log("Redeclared Language (var):", language);

console.log("Hoisted var:", hoistedVar); // undefined due to hoisting
var hoistedVar = "I am hoisted";

// Using let (block scoped, can be reassigned but not redeclared)
let age = 25;
console.log("Age (let):", age);

age = 30;
console.log("Updated Age (let):", age);

{
  let blockName = "Inside block";
  console.log(blockName);
}

// Using const (block scoped, cannot be reassigned)
const country = "India";
console.log("Country (const):", country);

// const with array
const numbers = [1, 2, 3];
numbers.push(4);
console.log("Numbers (const array):", numbers);

// const with object
const user = { name: "Puneeth" };
user.name = "Ram";
console.log("User (const object):", user);
