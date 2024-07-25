//Day 6: Arrrays

//Activity 1: Array Creations and Access.
//task 1: create a array of numbers from 1 to 5 and log the result
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//output : 1,2,3,4,5

//task2: Acess first and last elements of an array and console the result.
const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];
console.log('First Element:', firstElement);
console.log('Last Element:', lastElement);
// output: First Element: 1
//         Last Element: 5

//Activity 2: Array method Basic
//Task 3: use the push method to add a new number to the end of array and log the updated array
numbers.push(6);
console.log(numbers);
//output: [1, 2, 3, 4, 5, 6]

//Task 4: use the pop method to remove a last element from the array and log the updated array
numbers.pop();
console.log(numbers);
// output : [1, 2, 3, 4, 5]

//Task 5: use the Shift method to remove a first element from the array and log the updated array.
numbers.shift();
console.log(numbers);
//output:  [2, 3, 4,5]

//Task 6: use the unShift method to add a new element in the beginning array and log the updated array.
numbers.unshift(0);
console.log(numbers); // [0, 2, 3, 4, 5]


//Activity 3: Array method Intermediate
//Task 7: use the map method to create a new array where each number is doubled and log the new array.
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [0, 4, 6, 8, 10]

//Task 8: use the filter method to create a new array with only even number and log the new array.
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [ 0, 2, 4 ]

//Task 9: Use the reduce method to calculate the sum af all numbers in the array and log the result
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 14

//Activity 4: Array Iteration
//Task 10: use a for loop to iterate over the array and log the result.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//0
//2
//3
//4
//5

//Task 11: Use the foreach method to iterate over the array and log each of element
numbers.forEach(number => {
    console.log(number);
});
//0
//2
//3
//4
//5


//Activity 5: Multi-dimensional array
//Task12: Create a 2D array matrix and log the entire array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

//[
//  [1, 2, 3],
 // [4, 5, 6],
 // [7, 8, 9]
// ]


//Task 13: Access and log a specific element fron 2d array.
const element = matrix[1][2];
console.log(element); // Output: 6

//🎉 Day 6: Arrays Completed🚀
// Day 6 focused on arrays in JavaScript, covering array creation, access, basic and intermediate array methods, array iteration, and working with multi-dimensional arrays.


