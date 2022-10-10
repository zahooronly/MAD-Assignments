"use strict";
// right rotate an array
var arr = [1, 2, 3, 4, 5];
var rotate = 2;
var temp = [];
for (var i = arr.length - rotate; i < arr.length; i++) {
    temp.push(arr[i]);
}
for (var i = arr.length - 1; i >= rotate; i--) {
    arr[i] = arr[i - rotate];
}
for (var i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
}
console.log(arr);
