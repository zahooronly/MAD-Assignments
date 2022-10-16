// reverse a string
var str = "The quick brown fox jumps over the lazy dog";
var reverse = "";
for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
console.log("Reverse of a string: " + reverse);
