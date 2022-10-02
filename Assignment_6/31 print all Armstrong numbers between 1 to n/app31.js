"use strict";
function isArmstrong(n) {
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
function sumrOfArmstrong(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (isArmstrong(i)) {
            sum += i;
        }
    }
    console.log("Sum of all Armstrong numbers between 1 to " + n + " is " + sum);
    return sum;
}
sumrOfArmstrong(1000);
