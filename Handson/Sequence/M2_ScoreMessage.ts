import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let score: number = Number(lines[6]);
console.log("Score: "+score);
console.log("Your score is "+score);