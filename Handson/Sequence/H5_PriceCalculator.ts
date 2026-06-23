import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[15].split(" ");
let totalPrice: number = 0;
let itemNumber: number = 1;
let i: number = 0;

while (i < input.length) {
    let price: number = Number(input[i++]);
    let quantity: number = Number(input[i++]);
    totalPrice += price * quantity;
    let choice: string = input[i++];
    if (choice.toLowerCase() !== "yes") {
        break;
    }
    itemNumber++;
}

console.log("Total Price: " + totalPrice);