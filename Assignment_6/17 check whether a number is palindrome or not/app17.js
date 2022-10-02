"use strict";
function isPalindrome(num) {
    var sum = 0;
    var temp = num;
    while (num > 0) {
        sum = sum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return temp == sum;
}
console.log(isPalindrome(555));
console.log(isPalindrome(123));
