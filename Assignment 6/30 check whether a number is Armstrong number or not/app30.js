"use strict";
function Armstrong(n) {
    let sum = 0;
    let temp = n;
    while (temp > 0) {
        let r = temp % 10;
        sum += r * r * r;
        temp = Math.floor(temp / 10);
    }
    if (sum == n) {
        return true;
    }
    return false;
}
function checkArmstrong(n) {
    if (Armstrong(n)) {
        console.log(n + " is an Armstrong number");
    }
    else {
        console.log(n + " is not an Armstrong number");
    }
}
checkArmstrong(153);
