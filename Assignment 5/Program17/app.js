// Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var salary = Number(prompt("Enter Basic Salary: "));
var HRA = 0;
var DA = 0;
if (salary <= 10000) {
    HRA = 20;
    DA = 80;
}
else if (salary <= 20000) {
    HRA = 25;
    DA = 90;
}
else {
    HRA = 30;
    DA = 95;
}
var grossSalary = salary + (salary * HRA / 100) + (salary * DA / 100);
console.log("Gross Salary: " + grossSalary);
