"use strict";
// sort elements in ascending order and descending order
var arr = [1, 2, 63, 54, 5, 26, 7, 15, 9, 10];
var sortedArray = arr.sort(function (a, b) { return a - b; });
console.log("sortedArray in ascending order: " + sortedArray);
var sortedArray = arr.sort(function (a, b) { return b - a; });
console.log("sortedArray in descending order: " + sortedArray);
