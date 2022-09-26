// find the sum of first and last digit number
let firstNumber=0;
let lastNumber=0;
let SUM=0;
let NUMBER=Number(prompt("Enter a number"));
let temp=NUMBER;
while(temp>0){
    lastNumber=temp%10;
    temp=Math.floor(temp/10);
}