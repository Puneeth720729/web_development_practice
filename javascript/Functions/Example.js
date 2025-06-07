// Function Declaration
function greet(name = "Guest") {
  return "Hello, " + name;
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

// Arrow Function
const multiply = (x, y) => x * y;

// Using rest parameters
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// Calling the functions
console.log(greet());           // Hello, Guest
console.log(greet("Alice"));    // Hello, Alice
console.log(add(2, 3));         // 5
console.log(multiply(4, 5));    // 20
console.log(sumAll(1, 2, 3, 4)); // 10
