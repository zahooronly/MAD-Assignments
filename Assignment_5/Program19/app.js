// Write a ts program to check whether a character is alphabet or not
var character = prompt("Enter a character");
if (character.length == 1) {
    if ((character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) || (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)) {
        console.log("Alphabet");
    }
    else {
        console.log("Not an Alphabet");
    }
}
