"use strict";
var numb = Number(prompt("Enter a number:"));
var factor = [];
for (let i = 2; i <= numb; i++) {
    if (numb % i == 0) {
        factors.push(i);
        numb = numb / i;
        i--;
    }
}
console.log("Prime factors of " + numb + " are " + factor);
