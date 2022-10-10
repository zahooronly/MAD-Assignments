"use strict";
// find sum of all elements in array
var arr = [1, 2, 3, -1, -2, -3];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log('sum of all elements in array is ' + sum);
