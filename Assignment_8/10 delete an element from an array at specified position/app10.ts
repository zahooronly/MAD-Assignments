// delete an element from an array at specified position
var arr = [1, 2, 3, -1, -2, -3];
var pos = Number(prompt('enter a position'));
arr.splice(pos, 1);
console.log(arr);
