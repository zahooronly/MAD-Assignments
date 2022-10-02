// Sum of all prime numbers between 1 to n
function isPrime(n:number){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
function someOfPrime(n:number):number{
    let sum:number = 0;
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    console.log("Sum of all prime numbers between 1 to "+n+" is "+sum);
    return sum;
}
someOfPrime(100);
