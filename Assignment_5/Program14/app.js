// Write a ts program to find all roots of a quadratic equation
var a = Number(prompt("Enter the value of a: "));
var b = Number(prompt("Enter the value of b: "));
var c = Number(prompt("Enter the value of c: "));
var d = (b * b) - (4 * a * c);
if (d > 0) {
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("The roots of the equation are: " + x1 + " and " + x2);
}
