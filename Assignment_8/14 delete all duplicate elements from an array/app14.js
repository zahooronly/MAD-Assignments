"use strict";
// delete all duplicate elements from an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 45];
var unique = [];
var duplicate = [];
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
    }
    else {
        duplicate.push(arr[i]);
    }
}
for (var i = 0; i < duplicate.length; i++) {
    arr.splice(arr.indexOf(duplicate[i]), 1);
}
console.log(arr);
