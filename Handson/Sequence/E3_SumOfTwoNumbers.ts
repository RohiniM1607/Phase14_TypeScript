import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[1].split(" ");
let num1: number = Number(input[0]);
let num2: number = Number(input[1]);
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);