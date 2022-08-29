// Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// Display the grade and percentage of the student.
let physics:number = Number(prompt("Enter marks of Physics"));
let chemistry:number = Number(prompt("Enter marks of Chemistry"));
let biology:number = Number(prompt("Enter marks of Biology"));
let mathematics:number = Number(prompt("Enter marks of Mathematics"));
let computer:number = Number(prompt("Enter marks of Computer"));
let total:number = physics + chemistry + biology + mathematics + computer;
let percentage:number = total / 5;
let grade:string;
if (percentage >= 90) {
    grade = "A";
}else if (percentage >= 80) {
    grade = "B";
}else if (percentage >= 70) {
    grade = "C";
}else if (percentage >= 60) {
    grade = "D";
}else if (percentage >= 40) {
    grade = "E";
}else {
    grade = "F";
}
console.log("Total Marks: " + total);
console.log("Percentage: " + percentage);
console.log("Grade: " + grade);
