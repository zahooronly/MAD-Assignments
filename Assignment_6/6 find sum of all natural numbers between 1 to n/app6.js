"use strict";
let sum = 0;
let tillN = Number(prompt("Enter a number: "));
let index = 1;
while (index <= tillN) {
    sum += index;
    index++;
}
console.log("Sum of all natural numbers between 1 to " + tillN + " is " + sum);
