"use strict";
function isPrime(num) {
    var isPrime = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
var numberForCheck = Number(prompt("Enter a number"));
var isPrimeNumber = isPrime(numberForCheck);
if (isPrimeNumber) {
    console.log(numberForCheck + " is a prime number");
}
else {
    console.log(numberForCheck + " is not a prime number");
}
