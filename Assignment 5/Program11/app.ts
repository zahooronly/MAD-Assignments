// Write a ts program to input angles of a triangle and check whether triangle is valid or not.
let a:number= Number(prompt("Enter first angle of Triangle"));
let b:number= Number(prompt("Enter second angle of Triangle"));
let c:number= Number(prompt("Enter third angle of Triangle"));
if(a+b+c==180)
{
    console.log("Triangle is valid");
}else{
    console.log("Triangle is invalid");
}
