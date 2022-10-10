// find total number of negative elements in an array
var arr = [1, 2, 3, -1, -2, -3];
var negativeCount = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negativeCount++;
    }
}
console.log('total negative elements in array is ' + negativeCount);
