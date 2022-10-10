"use strict";
// count frequency of each element in an array
var arr = [1, 2, 3, -1, -2, -3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
var freq = {};
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    freq[num] = freq[num] ? freq[num] + 1 : 1;
}
console.log(freq);
