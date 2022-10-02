var numberDivisible = Number(prompt("Enter a number"));
if (numberDivisible % 5 == 0 && numberDivisible % 11 == 0) {
    console.log("The number is divisible by 5 and 11");
}
else {
    console.log("The number is not divisible by 5 and 11");
}
