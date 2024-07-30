// Task 1 : Write a recursive function to calculate the factorial of a number . Log the result for a few test cases.
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4));
console.log(factorial(5));

// Task 2 : Write a recursive function to calculate the nth Fibonacci number . Log the result for a few test cases.

const Fibonacci = (n) => {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

console.log(Fibonacci(4));
console.log(Fibonacci(5));