import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let radius: number = Number(lines[0]);
let area: number = 3.14 * radius * radius;
console.log("Radius = " + radius);
console.log("Area = " + area);