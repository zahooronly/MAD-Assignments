// Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
var a = Number(prompt("Enter the first side of Triangle: "));
var b = Number(prompt("Enter the second side of Triangle: "));
var c = Number(prompt("Enter the third side of Triangle: "));
if (a + b > c && a + c > b && b + c > a) {
    console.log("Triangle is valid");
}
else {
    console.log("Triangle is not valid");
}
