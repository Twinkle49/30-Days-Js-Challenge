// Day 15: Closures

// Activity 1 - Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
  const outerVariable = "Hello";

  // Return a function that accesses the outer variable
  return function innerFunction() {
    console.log(outerVariable);
  };
}

const func = outerFunction();
func(); 

//  Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter() {
  let privateCounter = 0;

  return {
  
    increment: function() {
      privateCounter++;
      console.log(`Counter: ${privateCounter}`);
    },
    getValue: function() {
      console.log(`Current Counter Value: ${privateCounter}`);
      return privateCounter;
    }
  };
}
const myCounter = createCounter();
myCounter.increment(); 
myCounter.increment(); 
myCounter.getValue();  



//    - Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
 
function createUniqueIdGenerator() {
  let lastId = 0;
  return function generateId() {
    lastId++;
    return lastId;
  };
}

const generateId = createUniqueIdGenerator();
console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2
console.log(generateId()); // Output: 3

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name
function createGreeting(userName) {
  return function greetUser() {
    console.log(`Hello, ${userName}!`);
  };
}

const greetTwinkle = createGreeting("Twinkle");
greetTwinkle();


// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionsArray() {
  const functionsArray = [];

  for (let i = 0; i < 5; i++) {
    functionsArray.push((function(index) {
      return function() {
        console.log(index);
      };
    })(i));
  }

  return functionsArray;
}

const functions = createFunctionsArray();
functions.forEach(func => func()); 


// Activity 4 - Module Pattern
 // Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
 const ItemManager = (function() {

  let items = [];

  return {

    addItem: function(item) {
      items.push(item);
      console.log(`${item} added.`);
    },
  
    removeItem: function(item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(`${item} removed.`);
      } else {
        console.log(`${item} not found.`);
      }
    },
  
    listItems: function() {
      console.log("Items:", items);
      return items;
    }
  };
})();

ItemManager.addItem("Apple"); // Output: Apple added.
ItemManager.addItem("Banana"); // Output: Banana added.
ItemManager.listItems(); // Output: Items: [ 'Apple', 'Banana' ]
ItemManager.removeItem("Apple"); // Output: Apple removed.
ItemManager.listItems(); // Output: Items: [ 'Banana' ]
ItemManager.removeItem("Grapes"); // Output: Grapes not found.

//Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
 function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log('Fetching from cache:', key);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    console.log('Computing result:', key);
    return result;
  };
}

function slowFunction(num) {
  for (let i = 0; i < 1e6; i++) {}
  return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);


console.log(memoizedSlowFunction(5)); // Output: Computing result: [5] 10
console.log(memoizedFunction(5)); // Fetches the result from cache

//Task 8: Create a memoized version of a function that calculates the factorial of a number.
 


function memoize(fn) {
  const cache = {};

  return function(...args) {
    // Create a unique key based on function arguments
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log('Fetching from cache:', key);
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    console.log('Computing result:', key);
    return result;
  };
}

// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Computes and caches the result
console.log(memoizedFactorial(5)); // Fetches the result from cache
