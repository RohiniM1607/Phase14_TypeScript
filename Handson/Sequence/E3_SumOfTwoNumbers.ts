import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const [num1, num2] = lines[1].split(" ").map(Number);
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);