// Write a ts program to calculate profit or loss
let soldPrice = Number(prompt("Enter price of the product"));
let manufacturePrice = Number(prompt("Enter price of the product"));
let quantity = Number(prompt("Enter quantity of the product"));
let profit = (soldPrice - manufacturePrice) * quantity;
if (profit > 0) {
    console.log("Profit is " + profit);
} else {
    console.log("Loss is " + profit);
}
