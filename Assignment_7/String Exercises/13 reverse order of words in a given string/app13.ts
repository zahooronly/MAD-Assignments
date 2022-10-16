// reverse order of words in a given string
var str = "The quick brown fox jumps over the lazy dog";
var words = str.split(" ");
var reverse = "";
for (var i = words.length - 1; i >= 0; i--) {
    reverse += words[i] + " ";
}
console.log("Original string: " + str);
console.log("Reverse order of words in a given string: " + reverse);
