// Write a ts program to count total number of notes in given amount
var notes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var amount = Number(prompt("Enter amount"));
var count = 0;
for (var i = 0; i < notes.length; i++) {
    count += Math.floor(amount / notes[i]);
    amount = amount % notes[i];
}
console.log(count);
