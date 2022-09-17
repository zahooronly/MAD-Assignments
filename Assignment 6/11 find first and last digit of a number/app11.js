"use strict";
let firstDigit = 0;
let lastDigit = 0;
let num = Number(prompt("Enter a number"));
firstDigit = num;
while (firstDigit >= 10) {
    firstDigit = firstDigit / 10;
}
firstDigit = Math.floor(firstDigit);
lastDigit = num % 10;
console.log("First digit is " + firstDigit);
console.log("Last digit is " + lastDigit);
