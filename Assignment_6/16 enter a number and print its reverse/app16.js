"use strict";
function reverseNumber(num) {
    let reverse = 0;
    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reverse;
}
console.log(reverseNumber(123));
