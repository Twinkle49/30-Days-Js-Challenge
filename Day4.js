// Day 4: Loops

//Activity: For loop
//Task1: Wap to print number from 1 to 10 using a loop .

// Using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Using a while loop 
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//o/p: 
//1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// Task 2: WAP to print the multiplication table of 5 using a for loop
const number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Output:
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//5 x 4 = 20
//5 x 5 = 25
//5 x 6 = 30
//5 x 7 = 35
//5 x 8 = 40
//5 x 9 = 45
//5 x 10 = 50



//Activity2: while loop
//Task3: Wap to calculate the sum of number from 1 to 10 using a while loop .

let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`The sum of numbers from 1 to 10 is ${sum}`);
//O/P: The sum of numbers from 1 to 10 is 55


// Task 4: Wap to print number from 10 to 1 using a while loop
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
//O/p:
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1


//Activity3: Do...while loop
//Task5: Wap to print number from 1 to 5 using a do while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
//o/p: 
//1
//2
//3
//4
//5

//Task6: Wap to calculate the factorial of a number using a do while loop
let number = 5;
let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= number);
console.log(`The factorial of ${number} is ${factorial}`);

//o/p: The factorial of 5 is 120


//Activity 4: Nested Loops
// Task 7: WAP to print a pattern using nested for loop

let rows = 5; 
for (let i = 1; i <= rows; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}
//o/p: 
// *
// **
// ***
// ****
// *****

//🎉 Day 4: Loops  Completed🚀
//Today, I explored various types of loops in JavaScript, including for loops, while loops, and do-while loops. Additionally, I practiced using nested loops to create patterns.
