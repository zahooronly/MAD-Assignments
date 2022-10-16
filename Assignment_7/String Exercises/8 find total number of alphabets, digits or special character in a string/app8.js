"use strict";
var str = "P@#yn26at^&i5ve";
var alphabets = 0;
var digits = 0;
var specialChar = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
        alphabets++;
    }
    else if (str[i].match(/[0-9]/)) {
        digits++;
    }
    else {
        specialChar++;
    }
}
console.log("Alphabets: " + alphabets);
console.log("Digits: " + digits);
console.log("Special Characters: " + specialChar);
