//Functions in JavaScript
//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
//Functions can take arguments and return values.

// 1. Function Declaration
function greet() {
    console.log("Hello!");
}

greet(); // Output: Hello!

// 2. function with parameters and return value
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8

// 3. Function Expression

const multiply = function (a, b) {
    return a * b;
};


// 4. Arrow Function

const square = (num) => num * num;
console.log(square(5)); // Output: 25

// 4.1 Arrow Function with multiple parameters
const addNumbers = (a, b) => a + b;

// 4.2 Arrow Function with no parameters
const sayHello = () => console.log("Hello!");

// 4.3 Arrow Function with multiple lines
const subtract = (a, b) => {
    const result = a - b;
    return result;
};

// 5. Default Parameters
function greet(name = "Alice") {
    console.log(`Hello, ${name}`);
}


// 6. Rest Parameters
// Rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// sum is already use in above example that's why I am using kl
function kl (...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(kl(1, 2, 3, 4, 5)); // Output: 15

// 7. callback functions
// A callback function is a function that is passed as an argument to another function.
// greet is already use in above example that's why I am using pl
function pl(name, callback) {
    console.log("Hello " + name);
    callback();
}

function callMe() {
    console.log("I am callback function");
}

pl("kunal", callMe);


// 8. Higher Order Functions
// A higher-order function is a function that takes another function as an argument or returns a function as
// a result or both.

function operate(a, b, operation) {
    return operation(a, b);
}

function multiple(x, y) {
    return x * y;
}

console.log(operate(5, 9, multiple)); // Output: 45


// 9. IIFE (Immediately Invoked Function Expression)
// IIFE is a function that is executed right after it is created.
(function () {
    console.log("Hello from IIFE!");
})();


// 10. function hoisting
// Function declarations are hoisted to the top of the file by JavaScript engine.

sayHello(); // Output: Hello!
function sayHello() {
    console.log("Hello!");
}

// 11. function scope
// Variables declared inside a function are not accessible from outside the function.
function greet() {
    let message = "Hello";
    console.log(message);
}
 console.log(message); // Output: ReferenceError: message is not defined


// 12. Closures
// A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.
function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}

// 13. Recursion
// Recursion is a technique in which a function calls itself.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}         