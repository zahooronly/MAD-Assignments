// count total number of words in a string
var str = "The quick brown fox jumps over the lazy dog";
var words = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
        words++;
    }
}
console.log("Total number of words in a string: " + (words + 1));
