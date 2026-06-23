import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8")
                .split(/\r?\n/);

let num1: number = Number(lines[1]); // 2nd line
let num2: number = Number(lines[2]); // 3rd line

let sum = num1 + num2;

console.log("The sum of " + num1 + " and " + num2 + " is " + sum);