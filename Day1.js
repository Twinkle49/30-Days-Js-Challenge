// Day 1: Variables and Data types

//Activity 1: Variable Declaration

// Task 1 : Declare a Variable using var, assign it to a number and log the no.

var number = 11;
console.log(number) // output: 11

// Variable Declaration: The variable number is declared using the var keyword.
// Assignment: The value 11 is assigned to the variable number.
// Logging: The value of the variable number is logged to the console using console.log.


// Task 2:  Declare a Variable using let , assign it to a string and log the value of no.

let string = "Twinkle";
console.log(string) //output: Twinkle

// Variable Declaration: The variable string is declared using the let keyword.
// Assignment: The value "Twinkle" is assigned to the variable string.

// Logging: The value of the variable string is logged to the console using console.log.
//Learnings:
//Variables declared with var are function-scoped and can be redeclared and updated within the same scope.
//Variables declared with let are block-scoped and cannot be redeclared within the same block, making them more predictable.

//Activity 2: constant Declaration
//Task 3: Declare a variable using const, assign it a boolean value, and log the value.

const boolean = true;
console.log(boolean); //output :true

// Variable Declaration: The variable boolean is declared using the const keyword.
// Assignment: The value true is assigned to the variable boolean.
// Logging: The value of the variable boolean is logged to the console using console.log.
// Learning:
//Variables declared with const are also block-scoped and must be initialized at the time of declaration, ensuring that their values cannot be reassigned.


//Activity 3: DataTypes:
//Task 4: Create Variable of diff. datatypes(number,string,boolean,array,object) and log the values of each using typeof operator

const number = 11;
console.log(typeof number)  //output : Number

const string = "Twinkle";
console.log(typeof string) //output : string

const Boolean = true;
console.log(typeof Boolean) //output: boolean

const array = ["hello"];
console.log(typeof array)  //output: object

const obj ={
  key: "value"
}
console.log(typeof obj)  //output : object

//Variable Declarations: Variables are declared using the const keyword for immutability.
//Logging Types: Each variable's type is logged using the typeof operator to determine its data type dynamically.
//Learnings:
// The typeof operator in JavaScript provides information about the type of a variable or expression.
// Arrays and objects are both classified as object by the typeof operator, which can sometimes be unexpected.




//Activity 4: Reassigning Variable:
//Task 5: Create Variable using let and assign to initial val ,reassign new value and log the both values.

let val = 4;
console.log(val); //output: 4
 val = 5;
console.log(val); //output: 5
// Variable Declaration: The variable val is declared using the let keyword.
// Initial Assignment: The value 4 is assigned to the variable val.
// Logging: The initial value of val (4) is logged to the console using console.log.
// Reassignment: The variable val is reassigned to the value 5.
// Logging Reassigned Value: The new value of val (5) is logged to the console using console.log.
//Learnings:
// Variables declared with let can be reassigned to new values within the same scope.
// Understanding the distinction between declaring variables with let (mutable) and const (immutable)

//Activity 5: Understanding const:
//Task 6: Try reassigning a variable declared with const and observe the error.

const variable = "hello"
console.log(variable); // hello
variable = "hii" 
console.log(variable) //ERROR!  variable = "hii"  TypeError: Assignment to constant variable.

// Variable Declaration: The variable variable is declared using the const keyword.
// Initial Assignment: The value "hello" is assigned to the constant variable.
// Logging: The initial value of variable ("hello") is logged to the console using console.log.
// Reassignment Attempt: An attempt is made to reassign the constant variable to "hii".
// Error: JavaScript throws a TypeError indicating "Assignment to constant variable."

//Learnings:
//Variables declared with const are constants and cannot have their values reassigned or redeclared.
//Use const for variables that should remain unchanged throughout their lifecycle to prevent unintended modifications.



//🎉 Day 1 Complete! 🚀

//Today, I delved into JavaScript variables and data types, mastering var, let, and const declarations. Understanding mutable versus immutable variables was key, along with dynamic type checking using typeof.

//Excited for Day 2 challenges ahead! 💪
