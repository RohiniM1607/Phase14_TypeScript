import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[12].split(" ");
let price: number = Number(input[0]);
let quantity: number = Number(input[1]);
console.log("Price: "+price);
console.log("Quantity: "+quantity);
let totalcost: number = price * quantity;
console.log("Total cost price: "+totalcost);