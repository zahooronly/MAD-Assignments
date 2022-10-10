"use strict";
// print all negative elements in an array
var arr = [1, 2, 3, -1, -2, -3];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(arr[i]);
    }
}
