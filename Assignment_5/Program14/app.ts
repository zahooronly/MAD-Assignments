// Write a ts program to find all roots of a quadratic equation
let a:number = Number(prompt("Enter the value of a: "));
let b:number = Number(prompt("Enter the value of b: "));
let c:number = Number(prompt("Enter the value of c: "));
let d:number = (b*b) - (4*a*c);
if(d>0){
    let x1:number = (-b + Math.sqrt(d))/(2*a);
    let x2:number = (-b - Math.sqrt(d))/(2*a);
    console.log("The roots of the equation are: " + x1 + " and " + x2);
}else {
    console.log("The equation has no real roots");
}