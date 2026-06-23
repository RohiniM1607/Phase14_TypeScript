import * as fs from "fs";

const data = fs.readFileSync("Input.txt", "utf8").split("\n");
let num = Number(data[10]);
let evenSum = 0;
let oddSum = 0;
while (num > 0) {
    let digit = num % 10;
    if (digit % 2 == 0) {
        evenSum += digit;
    } else {
        oddSum += digit;
    }
    num = (num - digit) / 10;
}
console.log(evenSum + " " + oddSum);