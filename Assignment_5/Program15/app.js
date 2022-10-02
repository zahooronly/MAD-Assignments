// Write a ts program to calculate profit or loss
var soldPrice = Number(prompt("Enter price of the product"));
var manufacturePrice = Number(prompt("Enter price of the product"));
var quantity = Number(prompt("Enter quantity of the product"));
var profit = (soldPrice - manufacturePrice) * quantity;
if (profit > 0) {
    console.log("Profit is " + profit);
}
else {
    console.log("Loss is " + profit);
}
