// Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
let electricityUnitCharges = Number(prompt("Enter electricity unit charges"));
let electricityUnits = Number(prompt("Enter electricity units"));
let electricityBill = 0;
if (electricityUnits <= 50) {
    electricityBill = electricityUnitCharges * electricityUnits;
}
else if (electricityUnits > 50 && electricityUnits <= 150) {
    electricityBill = 50 * 0.50 + (electricityUnits - 50) * 0.75;
}
else if (electricityUnits > 150 && electricityUnits <= 250) {
    electricityBill = 50 * 0.50 + 100 * 0.75 + (electricityUnits - 150) * 1.20;
}
else {
    electricityBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (electricityUnits - 250) * 1.50;
}
electricityBill = electricityBill + electricityBill * 0.20;
console.log("Electricity bill is " + electricityBill);