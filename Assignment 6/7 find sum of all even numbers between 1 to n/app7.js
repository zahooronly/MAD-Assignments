"use strict";
let sumOfEvenNumbers = 0;
let indexNumber = Number(prompt("Enter a number: "));
let c = 1;
while (c <= indexNumber) {
    if (c % 2 == 0) {
        sumOfEvenNumbers += c;
    }
    c++;
}
console.log("Sum of all even numbers between 1 to " + indexNumber + " is " + sumOfEvenNumbers);
