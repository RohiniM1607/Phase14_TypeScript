import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const [a, b, c] = lines[14].split(" ").map(Number);
if (a + b > c && a + c > b && b + c > a) {
    let s: number = (a + b + c) / 2;
    let area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Area of the triangle: " + area);
} 
else {
    console.log("The given sides do not form a valid triangle.");
}