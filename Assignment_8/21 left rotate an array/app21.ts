// left rotate an array
var arr = [1, 2, 3, 4, 5];
var rotate = 2;
var temp = [];
for (var i = 0; i < rotate; i++) {
    temp.push(arr[i]);
}
for (var i = 0; i < arr.length - rotate; i++) {
    arr[i] = arr[i + rotate];
}
for (var i = 0; i < temp.length; i++) {
    arr[arr.length - rotate + i] = temp[i];
}
console.log(arr);