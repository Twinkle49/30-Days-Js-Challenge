//Day 7: Objects
// Activity 1 : Object Creation and access
// Task 1: Create an object representing a book with properties like title, author and year and log the object .
const book = {
  title: "Book Name",
  author: "Author Name",
  year: 2024
};
console.log(book);
// Output: { title: 'Book Name', author: 'Author Name', year: 2024 }

//Task2: Access and log the title and author properties of book object.
console.log("Title:", book.title); // o/p: Title: Book Name
console.log("Author:", book.author); // o/p: Author: Author Name

// Activity 2: Object methods
// Task 3: add a method to book object that returns a string with the book's title and author and log the result of calling this method.
book.getDetails = function() {
  return `${this.title} by ${this.author}`;
};
console.log(book.getDetails()); // o/p: Book Name by Author Name

// Task 4: Add a method to book object that takes a parameter (year) and update the book's year property, then log the updated result
book.updateYear = function(newYear) {
  this.year = newYear;
};
book.updateYear(2025);
console.log("Updated Year:", book.year); //o/p: Updated Year: 2025

//Activity 3: Nested Objects
// TAsk5: Create a nested object representing a library with properties like a name and books(an array of book object) and log the library object to console.

const book1 = {
  title: "Book One",
  author: "Author One",
  year: 2021
};
const book2 = {
  title: "Book Two",
  author: "Author Two",
  year: 2022
};
const library = {
  name: "City Library",
  books: [book1, book2]
};
console.log(library);
//{
//  name: 'City Library',
// books: [
//  { title: 'Book One', author: 'Author One', year: 2021 },
//    { title: 'Book Two', author: 'Author Two', year: 2022 }
//  ]
//}

// Task 6: Access and log the name of library and titles of all the books in library.
library.books.forEach(book => {
  console.log("Book Title:", book.title);
});
//o/p: Book Title: Book One
//     Book Title: Book Two


//Activity 4: This Keyword
// task 7: Add a method to book object that uses the this keyword to return a string with the book's title and year, and log thte result of calling  this method .
book.getTitleAndYear = function() {
  return `${this.title} was published in ${this.year}`;
};
console.log(book.getTitleAndYear()); // o/p: Book Name was published in 2025


//Activity 5: Object Iteration 
// Task 8:  Use a for in loop to iterate over the properties of the book object and log each property and its value.
for (const property in book) {
  if (book.hasOwnProperty(property)) { 
    console.log(`${property}: ${book[property]}`);
  }
}
// O/p: getDetails: function() {
 // return `${this.title} by ${this.author}`;
// }
// updateYear: function(newYear) {
//  this.year = newYear;
//}
// getTitleAndYear: function() {
//  return `${this.title} was published in ${this.year}`;
// }

//Task 9: Use Object.Keys and Object.values method to log all the keys and values of the book object.
console.log("Keys and Values:");
for (const key in book) {
  if (book.hasOwnProperty(key)) { // Check if the property belongs to the object itself
    console.log(`Key: ${key}, Value: ${typeof book[key] === 'function' ? '[Function]' : book[key]}`);
  }
}
// o/p: Keys and Values:
//Key: title, Value: Book Name
//Key: author, Value: Author Name
//Key: year, Value: 2025
//Key: getDetails, Value: [Function]
//Key: updateYear, Value: [Function]
//Key: getTitleAndYear, Value: [Function]


////🎉 Day 7: Objects Completed🚀
// Day 7 focused on objects in JavaScript, covering object creation, property access, adding methods, nested objects, object iteration with for...in, and using Object.keys() and Object.values().
