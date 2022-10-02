// print all prime numbers between 1 to n
function isPrime(n:number){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
function printPrime(n:number){
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
printPrime(100);
