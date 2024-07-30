// Task 7 : Write a recursive function to perform binary search on a sorted array. Log the index of the target element for a few test cases.

const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) {
        return -1; 
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; 
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1); 
    } else {
        return binarySearch(arr, target, mid + 1, right); 
    }
};


const arr = [11,22,9,4,19];
arr.sort((a, b) => a - b); 

const targets = [11,22];
targets.forEach(target => {
    const index = binarySearch(arr, target);
    console.log(`Target ${target} is at index: ${index}`);
});


// Task 8 : Write a recursive function to count the occurences of a target element in an array . Log the result for a few test cases.

const countOccurrences = (arr, target, index = 0) => {
    if (index >= arr.length) {
        return 0; 
    }


    const count = arr[index] === target ? 1 : 0;

    
    return count + countOccurrences(arr, target, index + 1);
};


const array = [1, 2, 3, 4, 2, 2, 5, 2];
const target = 2;

const count = countOccurrences(array, target);
console.log(`The element ${target} occurs ${count} times in the array.`);