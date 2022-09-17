"use strict";
let sumOfOddNumbers = 0;
let limit = Number(prompt("Enter a number: "));
let q = 1;
while (q <= limit) {
    if (q % 2 != 0) {
        sumOfOddNumbers += q;
    }
    q++;
}
console.log("Sum of all odd numbers between 1 to " + limit + " is " + sumOfOddNumbers);
