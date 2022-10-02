// Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle
let a:number = Number(prompt("Enter the first side of the triangle"));
let b:number = Number(prompt("Enter the second side of the triangle"));
let c:number = Number(prompt("Enter the third side of the triangle"));
if(a===b && b===c){
    console.log("The triangle is equilateral");
}else if(a===b || b===c || a===c){
    console.log("The triangle is isosceles");
}else{
    console.log("The triangle is scalene");
}