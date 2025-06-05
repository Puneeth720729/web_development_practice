// Arithmetic Operators
let a = 10, b = 3;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a++ =", a++);
console.log("++b =", ++b);

// Assignment Operators
let c = 5;
c += 3; // equivalent to c = c + 3
console.log("c after += 3:", c);

// Comparison Operators
console.log("5 == '5':", 5 == '5');    // true (type coercion)
console.log("5 === '5':", 5 === '5');  // false (strict equality)
console.log("10 > 7:", 10 > 7);

// Logical Operators
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);

// String concatenation
let greet = "Hello" + " " + "World!";
console.log("Concatenated String:", greet);

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote);
