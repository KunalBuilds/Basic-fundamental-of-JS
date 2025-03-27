//Objects 
//Objects are used to store collections of data and more complex entities.
//An object is a collection of properties, and a property is an association between a name (or key) and a value.


// 1. Object Literal
let person = {
    name: "Alice",
    age: 25,
    isAdult: true,
}

console.log(person); // Output: { name: 'Alice', age: 25, isAdult: true }
console.log(person.name); // Output: Alice


// 2. using new object() constructor

const car = new Object();
car.brand = "BMW";
car.model = "X5";
car.year = 2021;

console.log(car); // Output: { brand: 'BMW', model: 'X5', year: 2021 }
console.log(car.brand); // Output: BMW


// 3. using Object.create() method
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const student = {
    name: "Bob",
    age: 20,
    course: "Computer Science",
};

const newStudent = Object.create(student);

console.log(newStudent); // Output: {}
console.log(newStudent.name); // Output: Bob


// 4.  Adding and modifing properties
// Properties can be added and modified anytime to an object.

const user = {name: "kunal" };
user.age = 24;
user.name = "Kunal Meena";
console.log(user); // Output: { name: 'Kunal Meena', age: 24


// 5. Deleting properties
// The delete operator is used to remove a property from an object.

delete user.age;
console.log(user); // Output: { name: 'Kunal Meena' }


// 6. Checking if a property exists
// The in operator is used to check if a property exists in an object.
console.log ("name" in user); // Output: true
console.log ("age" in user); // Output: false


// 7. Looping through an object
// for...in loop is used to iterate over the properties of an object.
for (let key in car) {
    console.log(key, car[key]);
}


// 8. This keyword in Obejects
// The this keyword refers to the object itself.
const  newcar = {
    brand: "BMW",
    model: "X5",
    year: 2021,
    details: function() {
        return `${this.brand} ${this.model} ${this.year}`;
    }
};

newcar.details(); // Output: BMW X5 2021

// 9. Object destruction
// Object destruction is a way to extract multiple properties from an object and assign them to variables.
const user1 = {name: "kunal", age: 24, city: "Delhi" };
const {name, age, city} = user1;
console.log(name, age, city); // Output: kunal 24 Delhi



// 10. Object spread operator

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const merged = {...obj1, ...obj2};
console.log(merged); // Output: {a: 1, b: 2, c: 3, d: 4}

// 11. object.key(), object.values(), object.entries()

const user2 = {name: "kunal", age: 24,};
console.log(Object.keys(user2)); // Output: [ 'name', 'age' ]
console.log(Object.values(user2)); // Output: [ 'kunal', 24 ]
console.log(Object.entries(user2)); // Output: [ [ 'name', 'kunal' ], [ 'age', 24 ] ]


// 12. Object.freeze()
// The Object.freeze() method freezes an object. A frozen object can no longer be changed.

const person1 = {name: "Alice", age: 25};
Object.freeze(person1);
person1.age = 30;
console.log(person1); // Output: { name: 'Alice', age: 25 }


// 13. classes (ES6)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
const person2 = new Person("John", 30);
console.log(person2.greet()); // Output: Hello John
