import * as fs from "fs";

const data = fs.readFileSync("Input.txt", "utf8").split("\n");
let n = Number(data[9]);
for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 2) {
        process.stdout.write(i + " ");
    }
}