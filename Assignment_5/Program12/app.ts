// Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
let a:number = Number(prompt("Enter the first side of Triangle: "));
let b:number = Number(prompt("Enter the second side of Triangle: "));
let c:number = Number(prompt("Enter the third side of Triangle: "));
if(a+b>c && a+c>b && b+c>a){
    console.log("Triangle is valid");
}else {
    console.log("Triangle is not valid");
}
