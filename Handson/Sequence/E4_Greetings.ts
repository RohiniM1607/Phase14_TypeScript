import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);


let name: string = lines[2];
console.log("Hello, ["+name+"]!");