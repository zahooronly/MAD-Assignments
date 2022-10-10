"use strict";
// copy all elements from one array to another array
var arr = [1, 2, 3, -1, -2, -3];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
}
console.log(arr2);
