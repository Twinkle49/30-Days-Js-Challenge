// Task 5 : Write a resursive function to reverse a string . Log the result for few test cases.

const strReverse = (str) => {
    if (str === '') {
        return '';
    } else {
        return strReverse(str.slice(1)) + str[0];
    }
};

console.log(strReverse("jAVASCRIPT"));
console.log(strReverse("Hello World"));


// Task 6 : Write a recursive function to check if a string is palindrome. Log the result for few test cases .

const isPalindrome = (str) => {
    if (str.length <= 1) {
        return true;

    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));

    }
    return false;
}

console.log(isPalindrome("madam"));
