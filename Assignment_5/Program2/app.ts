let maxNumber:number = 0;
let number1:number = Number(prompt("Enter first number"));
let number2:number = Number(prompt("Enter second number"));
let number3:number = Number(prompt("Enter third number"));
        if(number1 > number2){
            if(number1 > number3){
                number1 = maxNumber;
            }
            else{
                number3 = maxNumber;
            }
        }
        else{
            if(number2 > number3){
                number2 = maxNumber;
            }
            else{
                number3 = maxNumber;
            }
        }
        // console.log(`${maxNumber} is the greatest number`);
        alert(`${maxNumber} is the greatest number`);
