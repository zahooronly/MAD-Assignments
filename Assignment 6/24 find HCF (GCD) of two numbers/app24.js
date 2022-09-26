"use strict";
var number1 = Number(prompt("Enter first number"));
var number2 = Number(prompt("Enter second number"));
var hcf = 1;
for (let i = 1; i <= number1 && i <= number2; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
console.log("The HCF (GCD) of " + number1 + " and " + number2 + " is " + hcf);
