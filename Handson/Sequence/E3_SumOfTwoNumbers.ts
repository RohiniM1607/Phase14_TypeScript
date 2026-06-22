import promptSync from "prompt-sync";
const prompt = promptSync();

let num1: number = Number(prompt("Enter the first number: "));
let num2: number = Number(prompt("Enter the second number: "));
let sum = num1 + num2;
console.log("The sum of "+num1+" and "+num2+" is "+sum);