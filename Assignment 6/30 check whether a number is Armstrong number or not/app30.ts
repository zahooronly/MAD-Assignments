// check whether the number is Armstrong number or not
// Armstrong number is a number that is equal to the sum of cubes of its digits.
function Armstrong(n:number):boolean{
    let sum:number = 0;
    let temp:number = n;
    while(temp>0){
        let r:number = temp%10;
        sum += r*r*r;
        temp = Math.floor(temp/10);
    }
    if(sum==n){
        return true;
    }
    return false;
}
function checkArmstrong(n:number):void{
    if(Armstrong(n)){
        console.log(n+" is an Armstrong number");
    }else{
        console.log(n+" is not an Armstrong number");
    }
}
checkArmstrong(153);