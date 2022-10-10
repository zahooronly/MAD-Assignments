"use strict";
var str1 = "Hello World";
var str2 = "";
for (var i = 0; i < str1.length; i++) {
    var char = str1.charAt(i);
    if (char == char.toUpperCase()) {
        str2 += char.toLowerCase();
    }
    else {
        str2 += char.toUpperCase();
    }
}
console.log("str1 = " + str1);
console.log("str2 = " + str2);
