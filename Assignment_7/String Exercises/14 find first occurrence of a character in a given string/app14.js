"use strict";
var str = "The quick brown fox jumps over the lazy dog";
var ch = "o";
var index = -1;
for (var i = 0; i < str.length; i++) {
    if (str[i] == ch) {
        index = i;
        break;
    }
}
if (index == -1) {
    console.log("Character not found");
}
else {
    console.log("First occurrence of a character in a given string: " + index);
}
