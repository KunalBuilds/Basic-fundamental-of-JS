// Array
// Array is a collection of elements. It can store multiple values in a single variable. It is a special type of variable that can hold more than one value at a time. The array is a reference type data type. It is a collection of similar data types. It is a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type. Instead of declaring individual variables, such as number1, number2, number3, ..., number99, you declare one array variable such as numbers and use numbers[0], numbers[1], numbers[2], ..., numbers[99] to represent individual variables. An array is a collection of elements that are stored in contiguous memory locations. It is a data structure that stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type. Instead of declaring individual variables, such as number1, number2, number3, ..., number99, you declare one array variable such as numbers and use numbers[0], numbers[1], numbers[2], ..., numbers[99] to represent individual variables. An array is a collection of elements that are stored in contiguous memory locations. It is a data structure that stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type. Instead of declaring individual variables, such as number1, number2, number3, ..., number99, you declare one array variable such as numbers and use numbers[0], numbers[1], numbers[2], ..., numbers[99] to represent individual variables. An array is a collection of elements that are stored in contiguous memory locations. It is a data structure that stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type. Instead of declaring individual variables, such as number1, number2, number3, ..., number99, you declare one array variable such as numbers and use numbers[0], numbers[1], numbers[2

// 1. Array Declaration
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango' ]

// 2. Accessing Elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Mango

// 3. Modifying Elements
fruits[0] = "Orange";
console.log(fruits); // Output: [ 'Orange', 'Banana', 'Mango'

// 4. Adding Elements
// 4.1. Adding Elements to the End
fruits.push("Grapes");
console.log(fruits); // Output: [ 'Orange', 'Banana', 'Mango', 'Grapes' ]

// 4.2. Adding Elements to the Beginning
fruits.unshift("Strawberry");
console.log(fruits); // Output: [ 'Strawberry', 'Orange', 'Banana', 'Mango', 'Grapes' ]

// 4.3. Adding Elements at a Specific Index
// 4.3.1. Using splice() method

fruits.splice(2, "Cherry");
console.log(fruits); // Output: [ 'Strawberry', 'Orange', 'Cherry', 'Banana', 'Mango', 'Grapes' ]

// 4.3.2. Using splice() method to add multiple elements
fruits.splice(2, 0, "Pineapple", "Peach");
console.log(fruits); // Output: [ 'Strawberry', 'Orange', 'Pineapple', 'Peach', 'Cherry', 'Banana', 'Mango', 'Grapes' ]


// 5. Removing Elements
// 5.1. Removing Elements from the End
fruits.pop();
console.log(fruits); // Output: [ 'Strawberry', 'Orange', 'Pineapple', 'Peach', 'Cherry', 'Banana', 'Mango' ]

// 5.2. Removing Elements from the Beginning
fruits.shift();
console.log(fruits); // Output: [ 'Orange', 'Pineapple', 'Peach', 'Cherry', 'Banana', 'Mango' ]

// 5.3. Removing Elements from a Specific Index
// 5.3.1. Using splice() method
fruits.splice(2, 1);
console.log(fruits); // Output: [ 'Orange', 'Pineapple', 'Cherry', 'Banana', 'Mango' ]


// 6. Array Length
console.log(fruits.length); // Output: 5


// 7. Iterating an Array
// 7.1. Using for loop


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 7.2. Using forEach() method
fruits.forEach(function (fruit) {
    console.log(fruit);
});

// 8. Multidimensional Arrays
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][1]); // Output: 5



// 9. spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged); // Output: [ 1, 2, 3, 4

// 10. Array Destructuring
const [a, b, c] = arr1;
console.log(a, b, c); // Output: 1 2 3


// 11. Converting between arrays and strings
// fruits is already declared in the above example that is why I am using fal

let fal = ["Apple", "Banana", "Mango"];
let falString = fal.join(", ");
console.log(falString); // Output: Apple, Banana, Mango



// 12. Array Methods
// 12.1. Array.isArray()

console.log(Array.isArray(fruits)); // Output: true
console.log(Array.isArray("Hello")); // Output: false

// 13. Converting Strings to Arrays  split() method

let str =  "hello world";
let strArray = str.split(" ");
console.log(strArray); // Output: [ 'hello', 'world' ]



// 14. Sorting an Array

let numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers); // Output: [ 1, 2, 3, 4, 5 ]

// 15. Reversing an Array
numbers.reverse();
console.log(numbers); // Output: [ 5, 4, 3, 2, 1 ]


// 16. Finding an Element in an Array

console.log(numbers.indexOf(3)); // Output: 2

