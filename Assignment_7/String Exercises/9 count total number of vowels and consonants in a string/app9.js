"use strict";
var str = "The quick brown fox jumps over the lazy dog";
var vowels = 0;
var consonants = 0;
for (var i = 0; i < str.length; i++) {
    var ch = str[i].toLowerCase();
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        vowels++;
    }
    else if ((ch >= 'a' && ch <= 'z')) {
        consonants++;
    }
}
console.log("Total number of vowels in a string: " + vowels);
console.log("Total number of consonants in a string: " + consonants);
