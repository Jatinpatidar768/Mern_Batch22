// Find HCF of two numbers

// let a = prompt("Enter first number");
// let b = prompt("Enter second number");

// let x = a;
// let y = b;

// while (y !== 0) {
//     let remainder = x % y;
//     x = y;
//     y = remainder;
// }

// console.log("HCF of " + a + " and " + b + " is " + x);




function sumOfOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= 2*n; i += 2) {
        sum += i;
    }
    return sum;
}

// Example usage:
let n = 20;
console.log("Sum of first", n, "odd numbers is", sumOfOddNumbers(n));

