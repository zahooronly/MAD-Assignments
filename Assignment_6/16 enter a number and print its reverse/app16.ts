// reverse a number
function reverseNumber(num:number) {
    let reverse = 0;
    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reverse;
}
console.log(reverseNumber(123));