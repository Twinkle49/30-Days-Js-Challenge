// Day 3 : Control Structures 

//Activity 1: if-else statements
//Task 1: WAP to check if a no. is positive ,negative or zero and log the result

let num = 10; // Change this value to test different numbers

if (num > 0) {
  console.log(`${num} is positive.`);
} else if (num < 0) {
  console.log(`${num} is negative.`);
} else {
  console.log(`${num} is zero.`);
}

// Example usage with different numbers
num = -5;
if (num > 0) {
  console.log(`${num} is positive.`);
} else if (num < 0) {
  console.log(`${num} is negative.`);
} else {
  console.log(`${num} is zero.`);
}

num = 0;
if (num > 0) {
  console.log(`${num} is positive.`);
} else if (num < 0) {
  console.log(`${num} is negative.`);
} else {
  console.log(`${num} is zero.`);
}

//Output: 10 is positive.
//-5 is negative.
//0 is zero.

// Task 2: WAP to check if a person is eligible to vote(age>=18) and log the result.

let age = 20; 

if (age >= 18) {
  console.log('The person is eligible to vote.');
} else {
  console.log('The person is not eligible to vote.');
}
//output: The person is eligible to vote.

// You can change the value of age to test different ages
age = 16;

if (age >= 18) {
  console.log('The person is eligible to vote.');
} else {
  console.log('The person is not eligible to vote.');
}
//output : The person is not eligible to vote.




//Activity 2: Nested If-else statement 
// Task 3: WAP to find the largest of three number using nested if-else statement.
let a = 10;
let b = 20;
let c = 30;

// Nested if-else to find the largest number
if (a >= b) {
  if (a >= c) {
    console.log(`${a} is the largest number.`);
  } else {
    console.log(`${c} is the largest number.`);
  }
} else {
  if (b >= c) {
    console.log(`${b} is the largest number.`);
  } else {
    console.log(`${c} is the largest number.`);
  }
}
//Output: 30 is the largest number.

// You can change the values of a, b, and c to test different numbers
a = 15;
b = 25;
c = 5;

if (a >= b) {
  if (a >= c) {
    console.log(`${a} is the largest number.`);
  } else {
    console.log(`${c} is the largest number.`);
  }
} else {
  if (b >= c) {
    console.log(`${b} is the largest number.`);
  } else {
    console.log(`${c} is the largest number.`);
  }
}
//Output: 25 is the largest number.




////Activity 3: Switch Case 
// Task 4: WAP that uses a switch case to determine the day of week based on(1-7) and log the name of day

const dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log('Sunday');
    break;
  case 2:
    console.log('Monday');
    break;
  case 3:
    console.log('Tuesday');
    break;
  case 4:
    console.log('Wednesday');
    break;
  case 5:
    console.log('Thursday');
    break;
  case 6:
    console.log('Friday');
    break;
  case 7:
    console.log('Saturday');
    break;
  default:
    console.log('Invalid day number. Please enter a number between 1 and 7.');
}
//output : Tuesday


//Task 5: WAP that uses a switch cases to assign a grade (A,B,C,D and F) based on score and log the result

const score = 85; 

let grade;
switch (true) {
  case (score >= 90 && score <= 100):
    grade = 'A';
    break;
  case (score >= 80 && score < 90):
    grade = 'B';
    break;
  case (score >= 70 && score < 80):
    grade = 'C';
    break;
  case (score >= 60 && score < 70):
    grade = 'D';
    break;
  case (score >= 0 && score < 60):
    grade = 'F';
    break;
  default:
    grade = 'Invalid score';
}

console.log(`The grade for a score of ${score} is ${grade}.`);
//Output : The grade for a score of 85 is B.


//Activity 4: Conditional Operator
//task 6: WAP that uses the ternary operator to check if a number is even or odd and log the result .
let number = 10; 
let result = (number % 2 === 0) ? 'even' : 'odd';
console.log(`The number ${number} is ${result}.`);
//Output: The number 10 is even.



//Activity 5: Combining Condition
//task 7: WAP to check if a year is a leap year using multiple condition (divisible by 4, but not 100 unless and divisible by 400 ) and log the result to console.

let year = 2024; 
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
//output : 2024 is a leap year.


// 🎉 Day 3 Complete! 🚀

// Today, I explored JavaScript control structures, diving into if-else statements, nested if-else statements, switch cases, and conditional (ternary) operators.
// I wrote scripts to perform various operations and understood the differences and use cases of each control structure type.
