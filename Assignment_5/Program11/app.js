// Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var a = Number(prompt("Enter first angle of Triangle"));
var b = Number(prompt("Enter second angle of Triangle"));
var c = Number(prompt("Enter third angle of Triangle"));
if (a + b + c == 180) {
    console.log("Triangle is valid");
}
else {
    console.log("Triangle is invalid");
}
