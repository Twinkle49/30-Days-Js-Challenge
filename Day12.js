// Day 12: Error handling
// Task 1: WAF that intentionally throw an error and use a try-catch block to handle the error and log the msg.
function Task1() {
    try {
        throw new Error("This is an intentional error");
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
}
Task1();

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero Use a try-catch block to handle the error.
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return numerator / denominator;
}

function handleDivision(numerator, denominator) {
    try {
        const result = divideNumbers(numerator, denominator);
        console.log("Result:", result);
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
}
handleDivision(20, 5); 
handleDivision(20, 0); 


// Activity 2: Finally Block
// Task 3: Write a script that includes try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function executeWithFinally() {
    try {
        console.log("In the try block");
        throw new Error("This is an intentional error");
      
        console.log("This line will not be executed");
    } catch (error) {
        console.log("In the catch block: " + error.message);
    } finally {
        console.log("In the finally block: This will always execute");
    }
}
executeWithFinally();


// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.


class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError"; 
    }
}
function throwCustomError() {
    throw new CustomError("This is a custom error");
}
function handleCustomError() {
    try {
        throwCustomError();
    } catch (error) {
        if (error instanceof CustomError) {
            console.log("Caught a custom error: " + error.message);
        } else {
            console.log("Caught an unexpected error: " + error.message);
        }
    }
}
handleCustomError();

// Task 5: Write a function that validates user input(e.g., checking if the string is not empty) and throws a custom error if the validation fails.Handle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    return true; 
}
function handleValidation(input) {
    try {
        const isValid = validateInput(input);
        console.log("Validation successful:", isValid);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("Validation error:", error.message);
        } else {
            console.log("An unexpected error occurred:", error.message);
        }
    }
}
handleValidation("Hello, World!"); 
handleValidation(""); 
handleValidation("   ");


// Activity 4: Error handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected due to an error.");
    }
});

randomPromise
    .then(message => {
        console.log(message); 
    })
    .catch(error => {
        console.log("Caught an error:", error); 
    });


// Task 7: Use try-catch within an Async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleAsyncPromise() {
    try {
        const result = await randomPromise;
        console.log(result); 
    } catch (error) {
        console.log("Caught an error:", error); 
    }
}
handleAsyncPromise();


// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate message to the console.

const validUrl = "https://jsonplaceholder.typicode.com/posts/1";
fetch(validUrl)
    .then(response => {
       
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data); 
    })
    .catch(error => {
        console.log("Caught an error:", error.message);
    });


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const invalidUrl = "https://api.com";
async function fetchFromInvalidUrl() {
    try {
        const response = await fetch(invalidUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Data received:", data);
    } catch (error) {
        console.log("Caught an error:", error.message);
    }
}
fetchFromInvalidUrl();
