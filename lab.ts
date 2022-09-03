// *************Even Odd Function*************;
function evenOdd(num:number=0):string {
    let result:string;
    if(num%2===0){
        result='Even number';
    } else {
        result='Odd number'
    }
    return result;
}
// console.log(evenOdd(3));




// ***********Maximum number finder;*************
function maximumNumber(num1:number,num2:number,num3:number,num4:number):number{

    let maxNumber:number;
    if(num1>num2){
        if(num1>num3){
            if(num1>num4){
                return num1;
            }
        }else if(num3>num4){
            maxNumber=num3;
            return num3;
        } else {
            maxNumber=num4;
            return num4;
        }
    } else if(num2>num3){
                if(num2>num4){
                    return num2;
            } else {
                return num4;
            }
    } else if(num3>num4) {
                return num3;
    } else {
        return num4;
    }
}
console.log(maximumNumber(20,25,30,55));
// console.log(1,2,3,4)
