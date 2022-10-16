// check whether a string is palindrome or not
var str = "The quick brown fox jumps over the lazy dog";
var reverse = "";
for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}
if (str == reverse) {
    console.log("String is palindrome");
}
else {
    console.log("String is not palindrome");
}
