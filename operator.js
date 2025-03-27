/*operators in java script
1. Arithmetic operators
2. Assignment operators
3. Comparison operators
4. Logical operators
5. Bitwise operators
6. String operators
7. Conditional (ternary) operator
8. Comma operator
*/

// 1. Arithmetic operators
console.log(5 + 3); // Output: 8
console.log(5 - 3); // Output: 2
console.log(5 * 3); // Output: 15
console.log(5 / 3); // Output: 1.66
console.log(5 % 3); // Output: 2
console.log(5 ** 3); // Output: 125

// 2. Assignment operators
let x = 5;
x += 3; // Equivalent to x = x + 3
console.log(x); // Output: 8

//3. Comparison operators
console.log(5 == 5); // Output: true
console.log(5 != 3); // Output: true
console.log(5 > 3); // Output: true
console.log(5 < 3); // Output: false
console.log(5 >= 5); // Output: true
console.log(5 === 5); // Output: true
console.log(5 !== 5); // Output: false


//4. Logical operators
let a = true;
let b = false;
console.log(a && b); // Output: false
console.log(a || b); // Output: true
console.log(!a); // Output: false
//5. Bitwise operators
console.log(5 & 3); // Output: 1
console.log(5 | 3); // Output: 7
console.log(5 ^ 3); // Output: 6
console.log(~5); // Output: -6
console.log(5 << 1); // Output: 10
console.log(5 >> 1); // Output: 2

//6. String operators
let str1 = "Hello";
let str2 = "World";
console.log(str1 + str2); // Output: HelloWorld
console.log(str1 += str2); // Output: HelloWorld

//7. Conditional (ternary) operator
let age = 18;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // Output: You are an adult

//8. Comma operator
let k = (5, 10);
console.log(x); // Output: 10

