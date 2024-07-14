// Day 2: Operators:
 // Activity 1: Arithmetic Operations


//Task 1 : WAP to add two no. and log the values
// Variable Declarations: The variables num1 and num2 are declared using the const keyword.
const num1= 22;
const num2 =11;
const add = num1 + num2;
console.log('Addition:', add); // o/p : 33

//Task 2 : WAP to subtract two no. and log the values
const sub = num1 - num2;
const sub = num1 - num2;
console.log('Subtraction:', sub);  //output : 9

//Task 3 : WAP to multiply two no. and log the values
const multiply = num1 * num2;
console.log("Multiplication" ,multiply) //output :252
//Task 4 : WAP to Divide two no. and log the values
const Divide = num1 /num2;
console.log('Division:', Divide); // O/P: 1.75
//Task 5 : WAP to find remainder when one no. is divided by another no. and log the result
const Remainder = num1 % num2;
console.log('Remainder:', Remainder); // O/p: 9


//Write a script that perform basic arithmetic operation on two no. and logs the results
console.log(`Addition: ${add}`);
console.log(`Subtraction: ${sub}`);
console.log(`Multiplication: ${multiply}`);
console.log(`Division: ${Divide}`);
console.log(`Remainder: ${Remainder}`);


// Activity 2: Assignment Operators
// Task 6: use the += operator to add a no. to variable and log the result.
let number = 11;
number += 5;
console.log(number); // O/p: 16

// Task 7: use the -= operator to add a no. to variable and log the result.
let newNumber = 11;
newNumber -= 3;
console.log(newNumber); // O/P: 8


// Activity 3: Comparison Operators
// Task 8: WAP to compare 2 no. using > and < and log the result.
const a =3;
const b = 2;
const isAgreaterthanB = a > b;
console.log( "Is A greater than B ",isAgreaterthanB); // O/p: true
const isBgreaterthanA = a < b;
console.log("Is B greater than A" , isBgreaterthanA); // O/p: False

// Task 9: WAP to compare 2 no. using >= and <= and log the result.
const IS_A_greater_than_B = a >= b;
console.log( "Is A greater than B ",IS_A_greater_than_B); // O/p: true
const IS_B_greater_than_A = a <= b;
console.log( "Is B greater than A ",IS_B_greater_than_A); // o/p: False


// Task 10: WAP to compare 2 no. using == and === and log the result.
const equal = a==b;
console.log("Is a equal to b", equal); //O/p: false
const Stricklyequal = a === b;
console.log("Is a equal to b", Stricklyequal ); //O/P : false


// Learnings:
// The >= operator checks if the value of the left operand is greater than or equal to the value of the right operand.
// The <= operator checks if the value of the left operand is less than or equal to the value of the right operand.
// These comparison operators return a boolean value (true or false).
// The == operator checks if the values of the two operands are equal, performing type coercion if necessary.
// The === operator checks if the values and types of the two operands are strictly equal, without performing type coercion.


// Activity 4: Logical Operators
// Task 11: WAP that uses the && operator to combine 2 conditions and log the result.
const andCondition = isAGreaterThanB && isEqual;
console.log('Is a greater than b AND a equal to b?', andCondition); // o/p: false
// Task 12: WAP that uses the || operator to combine 2 conditions and log the result.
const orCondition = isAGreaterThanB || isEqual;
console.log('Is a greater than b OR a equal to b?', orCondition); // o/p: true
// Task 13: WAP that uses the ! operator to combine 2 conditions and log the result.
const notCondition = !isEqual;
console.log('Is a NOT equal to b?', notCondition); // O/p: true
// Combining  conditions
const complexCondition = (isAGreaterThanB || isALessThanB) && !isStrictlyEqual;
console.log('Is a greater than b OR a less than b AND NOT strictly equal to b?', complexCondition); // o/p: true
// Learnings:
// The && (logical AND) operator combines conditions and returns true only if both conditions are true.
// The || (logical OR) operator combines conditions and returns true if at least one condition is true.
// The ! (logical NOT) operator negates a condition, returning true if the condition is false and vice versa.
// Complex conditions can be created by combining logical operators.


//Activity 5: Ternary Operators
//task 14:WAP that uses the ternary operator to check if the number is positive or negative and logs the result.
const num = -5;
const result = (num >= 0) ? 'Positive' : 'Negative';
console.log(`The number ${num} is ${result}.`); // o/p: The number -5 is Negative.
// Learnings:
// The ternary operator is a shorthand for an if-else statement. It checks a condition and returns one of two values based on the condition.
// Syntax: condition ? value_if_true : value_if_false
