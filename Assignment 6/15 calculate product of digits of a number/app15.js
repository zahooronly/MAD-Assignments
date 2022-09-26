"use strict";
function productOfDigits(num) {
    var sum = 0;
    while (num > 0) {
        sum *= num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(productOfDigits(123));
