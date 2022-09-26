"use strict";
function findLCM(num1, num2) {
    var max = Math.max(num1, num2);
    var min = Math.min(num1, num2);
    var lcm = max;
    while (lcm % min != 0) {
        lcm += max;
    }
    return lcm;
}
var number1 = Number(prompt("Enter first number"));
var number2 = Number(prompt("Enter second number"));
var lcm = findLCM(number1, number2);
