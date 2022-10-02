// print al Armstrong numbers between 1 to n
function isArmstrong(n:number):boolean{
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
function sumrOfArmstrong(n:number):number{
    let sum:number=0;
    for(let i=1;i<=n;i++){
        if(isArmstrong(i)){
            sum += i;
        }
    }
    console.log("Sum of all Armstrong numbers between 1 to "+n+" is "+sum);
    return sum;
}
sumrOfArmstrong(1000);