"use strict";
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
function someOfPrime(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    console.log("Sum of all prime numbers between 1 to " + n + " is " + sum);
    return sum;
}
someOfPrime(100);
