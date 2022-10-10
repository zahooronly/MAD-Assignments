// sort even and odd elements of array separately
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = [];
var odd = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even.push(arr[i]);
    }
    else {
        odd.push(arr[i]);
    }
}
var sortedEven = even.sort(function (a, b) { return a - b; });
var sortedOdd = odd.sort(function (a, b) { return a - b; });
console.log(sortedEven);
console.log(sortedOdd);
