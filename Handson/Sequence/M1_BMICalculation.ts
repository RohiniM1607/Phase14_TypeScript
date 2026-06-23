import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[5].split(" ");
let weight: number = Number(input[0]);
let height: number = Number(input[1]);
let w: number = Number(weight);
let h: number = Number(height);
let bmi: number= (w)/(h * h);
console.log("BMI: "+bmi);
