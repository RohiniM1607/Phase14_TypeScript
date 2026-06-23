import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const [price, quantity] = lines[12].split(" ").map(Number);
console.log("Price: "+price);
console.log("Quantity: "+quantity);
let totalcost: number = price * quantity;
console.log("Total cost price: "+totalcost);