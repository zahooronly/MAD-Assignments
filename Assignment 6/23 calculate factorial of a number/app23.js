"use strict";
var numberr = Number(prompt("Enter a number"));
var factorial = 1;
for (let i = 1; i <= numberr; i++) {
    factorial = factorial * i;
}
console.log("The factorial of " + numberr + " is " + factorial);
