// find all factors of a number
var numberr = Number(prompt("Enter a number"));
var factors = [];
for (let i = 1; i <= numberr; i++) {
    if (numberr % i == 0) {
        factors.push(i);
    }
}
console.log(factors);