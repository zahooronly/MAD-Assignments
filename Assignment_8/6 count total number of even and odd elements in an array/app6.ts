// count total number of even and odd elements in an array
var arr = [1, 2, 3, -1, -2, -3];
var evenCount = 0;
var oddCount = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    }
    else {
        oddCount++;
    }
}
console.log('total even elements in array is ' + evenCount);
console.log('total odd elements in array is ' + oddCount);
