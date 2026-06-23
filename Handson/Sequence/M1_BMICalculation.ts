import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const [weight, height] = lines[5].split(" ").map(Number);
let w: number = Number(weight);
let h: number = Number(height);
let bmi: number= (w)/(h * h);
console.log("BMI: "+bmi);
