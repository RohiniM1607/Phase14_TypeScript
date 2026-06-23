import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const [radius, angle] = lines[11].split(" ").map(Number);
console.log("Radius: "+radius);
console.log("Angle: "+angle);
let diameter: number = 2 * radius;
let circumference: number = 2 * Math.PI * radius;
let sectorArea: number = (angle / 360) * Math.PI * radius * radius;
let arcLength: number = (angle / 360) * circumference;

console.log("Radius: " + radius);
console.log("Diameter: " + diameter);
console.log("Circumference: " + circumference);
console.log("Sector Area for " + angle + " degrees: " + sectorArea);
console.log("Arc Length for " + angle + " degrees: " + arcLength);