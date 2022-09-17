// total digits in a number
let anyNumber = Number(prompt("Enter a number: "));
let counter = 0;
while (anyNumber != 0) {
    anyNumber = Math.floor(anyNumber / 10);
    counter++;
}
console.log("Total digits in a number is " + counter);
