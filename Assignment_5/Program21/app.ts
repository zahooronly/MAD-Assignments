// Write a ts program to count total number of notes in given amount
let notes:number[] = [5000,1000, 500, 100, 50, 20, 10,5,2,1];
let amount = Number(prompt("Enter amount"));
let numberOfNotes:number = 0;
for (let i = 0; i < notes.length; i++) {
    numberOfNotes += Math.floor(amount / notes[i]);
    amount = amount % notes[i];
}
console.log(numberOfNotes);
