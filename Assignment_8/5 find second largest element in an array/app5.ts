// find second largest element in an array
var arr = [1, 2, 3, -1, -2, -3];
var max = arr[0];
var secondMax = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    }
    if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
    }
}
console.log('second largest element in array is ' + secondMax);