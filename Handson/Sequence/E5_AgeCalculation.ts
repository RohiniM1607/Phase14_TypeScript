import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let birthday: string=lines[3];
let birthDate = new Date(birthday);
let today = new Date();
let age: number = today.getFullYear() - birthDate.getFullYear();
if (today.getMonth() < birthDate.getMonth() ||(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
    age--;
}

console.log("Age: " + age);
