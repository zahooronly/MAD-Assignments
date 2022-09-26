"use strict";
var numberr = Number(prompt("Enter a number"));
var power = Number(prompt("Enter the power of a number"));
var result = 1;
for (let i = 1; i <= power; i++) {
    result = result * numberr;
}
