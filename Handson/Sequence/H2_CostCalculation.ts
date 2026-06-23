import promptSync from "prompt-sync";
const prompt = promptSync();

let price: number = Number(prompt("Enter the price of item: "));
let quantity: number = Number(prompt("Enter the quantity: "));
let totalcost: number = price * quantity;
console.log("Total cost price: "+totalcost);