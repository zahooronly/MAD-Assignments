"use strict";
// print all unique elements in array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 45];
var unique = [];
for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
    }
}
console.log(unique);
