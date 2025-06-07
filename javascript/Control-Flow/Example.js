// if-else example
let num = 10;
if (num > 0) {
  console.log("Positive number");
} else if (num === 0) {
  console.log("Zero");
} else {
  console.log("Negative number");
}

// switch example
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// while loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// do-while loop
let x = 1;
do {
  console.log("Do-while loop x:", x);
  x++;
} while (x <= 2);
