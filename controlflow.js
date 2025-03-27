// Control Flow
// Control flow determines the execution order of statements in a JavaScript program. It includes conditional statements, loops, and function calls.

// Conditional Statements
// Conditional statements are used to perform different actions based on different conditions.


// 1. If Statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult");
}

// 2. If-Else Statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 3. If-Else-If Statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
}
else {
  console.log("You are a child");
}

// 4. Switch Statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
        case "Thursday":
        console.log("Today is Thursday");
        break;
        case "Friday":
        console.log("Today is Friday");
        break;
        case "Saturday":
        console.log("Today is Saturday");
        break;
        case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Loops
// Loops are used to execute a block of code multiple times.
// There are three types of loops in JavaScript: for, while, and do-while loops.

// 1. For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 3. Do-While Loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// 4. for-in Loop
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 5. for-of Loop
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// jump statements
// Jump statements are used to control the flow of a program by jumping to a specific section of code.

// 1. Break Statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// 2. Continue Statement
for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
    }

// 3. Return Statement
function add(a, b) {
  return a + b;
}

//4. Exception Handling
// Exception handling is a mechanism to handle runtime errors gracefully without crashing the program.It is used to handle unexpected events or errors that occur during the execution of a program.

// 1. try-catch Statement
try { 
    let result = 10/0;
    console.log(result);
} catch (error) {
    console.log("Error: " + error.message);
}

// 2. finally Block

try {
    let result = 10/0;
    console.log(result);
} catch (error) {
    console.log("Error: " + error.message);
} finally {
    console.log("Finally block executed");
}
