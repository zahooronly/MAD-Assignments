// search an element in an array
var arr = [1, 2, 3, 4, 5];
var search = 3;
var flag = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == search) {
        flag = true;
        break;
    }
}
if (flag == true) {
    console.log("Element found");
}
else {
    console.log("Element not found");
}
