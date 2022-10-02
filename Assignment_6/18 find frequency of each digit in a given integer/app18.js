"use strict";
function frequencyOfDigit(num) {
    var freq = new Array(10).fill(0);
    while (num > 0) {
        freq[num % 10]++;
        num = Math.floor(num / 10);
    }
    return freq;
}
console.log(frequencyOfDigit(1234567890));
