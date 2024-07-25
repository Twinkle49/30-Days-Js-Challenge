//Day 8: ES6+ Features

// Activity 1: Template Literals
// TAsk 1: Use a Template Literals to create a string  that include variable for a person's name and age, and log the string.
const name = "ABC";
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// Output : My name is ABC and I am 30 years old.

//Task 2: Create a multi-line string using template literals and log to the console.
const multiLineString = `This is a multi-line string.
Hello , How are you?`
console.log(multiLineString);
// Output: This is a multi-line string.
//Hello , How are you?


// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second element from an array of number and log the result.
const numbers = [10, 20, 30, 40, 50];
const [first, second] = numbers;
console.log(`The first number is ${first} and the second number is ${second}.`);
// Output : The first number is 10 and the second number is 20.


// Task 4: Use object Destructuring to extract the title and author from a book object and log them to console.
const book = {
  title: "Mastering JavaScript: From Beginner to Expert",
  author: "John Doe",
  year: 2024
};

const { title, author, year } = book;
console.log(`The book "${title}" was written by ${author} in the year ${year}.`);
// output: The book "Mastering JavaScript: From Beginner to Expert" was written by John Doe in the year 2024.


//Activity 3: Spread and Rest Operator
//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional element , and log the new array
const originalArray = [1, 2, 3, 4, 5];
const newArray = [...originalArray, 6];
console.log(newArray);
// Output: [ 1, 2, 3, 4, 5, 6 ]

// Task 6: Use the rest operator in a function to accept an arbitrary number of argument , sum them, and return the result.
function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result);  // Output: 15


//Activity 4: Default Parameter
// Task 7: Write a function that takes teo parameter and return their product , with the second parameter havind a default of 1 and log the result of calling this function with and without parameter

function multiply(a, b = 1) {
  return a * b;
}

// Calling the function with both parameters
const result1 = multiply(5, 3);
console.log(result1);  // Output: 15

// Calling the function with only the first parameter
const result2 = multiply(7);
console.log(result2);  // Output: 7


//Activity 5: Enhanced Object Literal.
// Task 8: Use enhanced object literals to create an object with methods and properties and log the object
const person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
  haveBirthday() {
    this.age += 1;
    return `Happy Birthday ${this.name}! You are now ${this.age} years old.`;
  }
};

console.log(person);
  //Output: {
  //name: 'Alice',
  //age: 30,
  //greet: [Function: greet],
  //haveBirthday: [Function: haveBirthday]
//}
console.log(person.greet());         // Output: Hello, my name is Alice and I am 30 years old.
console.log(person.haveBirthday());  // Output: Happy Birthday Alice! You are now 31 years old.
console.log(person.greet());         // Output: Hello, my name is Alice and I am 31 years old.


// TAsk 9: Create an object with computed property names based on variables and log the object 
const property1 = "name";
const property2 = "age";

const person = {
  [property1]: "Bob",
  [property2]: 25
};
console.log(person);
// Output: { name: 'Bob', age: 25 }


// 🎉 Day 8: ES6+ Features Completed 🚀
// Day 8 focused on various ES6+ features, including template literals, destructuring, spread and rest operators, default parameters, and enhanced object literals.
