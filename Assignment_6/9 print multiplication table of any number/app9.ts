// multiplication table of any number
let number = Number(prompt("Enter the table number: "));
let count = 1;
let range=Number(prompt("Enter range of table: "));
while (count <= range) {
    console.log(number + " * " + count + " = " + number * count);
    count++;
}