// Write a ts program to input any character and check whether it is alphabet, digit or special character
let character:string|number|null = prompt("Enter any character")!;
if(character.charCodeAt(0)>=65 && character.charCodeAt(0)<=90){
    console.log("Alphabet");
}else if(character.charCodeAt(0)>=48 && character.charCodeAt(0)<=57){
    console.log("Digit");
}else{
    console.log("Special Character");
}

