// Task 3 : Write a recursive function to find the sum of all elements in an array . Log the result  for a few test cases.

const arrSum = (arr) => {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + arrSum(arr.slice(1));
    }
};

console.log(arrSum([1, 2, 3, 4, 5]));
console.log(arrSum([]));



// Task 4 : Write a recursive function to find the maximum element in an array. Log the result of few test cases .

const maxArray = (arr) => {
    if (arr.length === 0) {
        return -Infinity; 
    } else if (arr.length === 1) {
        return arr[0]; 
    } else {
        let maxofRest = maxArray(arr.slice(1));
        return arr[0] > maxofRest ? arr[0] : maxofRest;
    }
};

console.log(maxArray([1, 2, 3, 4, 5, 6])); 

