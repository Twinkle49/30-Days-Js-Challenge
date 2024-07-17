// Day 5: Functions
// Activity 1: Function Declarations
//Task 1: WAF to check if a number is even or odd and log the result.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}
checkEvenOrOdd(5); // Output: 5 is odd
checkEvenOrOdd(10); // Output: 10 is even

// Task 2: WAF to calculate the square of a number and return the result:
function calculateSquare(number) {
    return number * number;
}
const result1 = calculateSquare(4); 
console.log(result1); //  Output: 16


// Activity 2:Function Expression: 
// Task 3: WAF expression to find the maximum of two numbers and log the result.
const findMax = function(num1, num2) {
    const max = (num1 > num2) ? num1 : num2;
    console.log(`The maximum of ${num1} and ${num2} is ${max}`);
    return max;
};
findMax(10, 20); // Output: The maximum of 10 and 20 is 20

//Task 4: WAF expression to concatenate two strings and return the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};
const result1 = concatenateStrings("Day 5, ", "Functions"); 
console.log(result1); // Output: "Day 5, Functions"



// Activity 3: Arrow Function
//Task 5: Write a arrow function to calculate sum of two number.
const calculateSum = (num1, num2) => num1 + num2;
const result1 = calculateSum(5, 10); 
console.log(result1);// Output: 15

//Task 6: Write a arrow function to check if a string contains a specific character and return boolean value.

//Using includes 
const containsCharacter = (str, char) => str.includes(char);
const result1 = containsCharacter("Hello, World!", "W"); // Output: true
console.log(result1); // true


// using loop 
const containsCharacter = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return true;
        }
    }
    return false;
};
const result1 = containsCharacter("Hello, World!", "W");
console.log(result1);  // Output: true

// Activity 4: Function Parameter and default Value.
//Task 7: WAF that takes 2 parameter and return their product. provide a default value for the second param
function multiply(num1, num2 = 1) {
    return num1 * num2;
}
const result1 = multiply(5, 10); 
const result2 = multiply(7);     
console.log(result1); // Output: 50
console.log(result2); // Output: 7 (since the default value for num2 is 1)


//Task 8: WAF that takes person's name and age return greet message. provide a default value for the age
function greet(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}
const message1 = greet("JS", 25);
console.log(message1);  // Output: "Hello, JS! You are 25 years old."


//Activity 5: High- Order function
//task 9: Write ahigh order function that takes a function and number and calls the function many times.
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
const sayHello = () => console.log("Hello!");
repeatFunction(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!

//task 10: write a high order function that takes two function and a value ,applies the first function to the value , and then applies the second function to the result.

function composeFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}
const addOne = x => x + 1;
const double = x => x * 2;

const finalResult = composeFunctions(addOne, double, 3);
console.log(finalResult); // Output: 8

//🎉 Day 5: Loops  Completed🚀
// Day 5 focused on mastering various types of functions in JavaScript, including their syntax, parameters, default values, and application in higher-order functions.
