// Number to words
// Enter a number and print it in words
function numberToWords(num:number){
    let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = "";
    while(num > 0){
        result = words[num % 10] + " " + result;
        num = Math.floor(num / 10);
    }
}
console.log(numberToWords(123));