"use strict";
// put even and odd elements of array in two separate array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = [];
var odd = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even.push(arr[i]);
    }
    else {
        odd.push(arr[i]);
    }
}
console.log(even);
console.log(odd);
