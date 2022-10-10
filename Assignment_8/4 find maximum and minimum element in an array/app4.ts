// find maximum and minimum element in an array
var arr = [1, 2, 3, -1, -2, -3];
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log('maximum element in array is ' + max);
console.log('minimum element in array is ' + min);
