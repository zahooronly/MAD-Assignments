// number is palindrome or not
function isPalindrome(num:number) {
    var sum = 0;
    var temp = num;
    while (num > 0) {
        sum = sum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return temp == sum;
}
console.log(isPalindrome(555));
console.log(isPalindrome(123));