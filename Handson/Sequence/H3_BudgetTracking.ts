import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

const input = lines[13].split(" ");
const salary: number = Number(input[0]);
console.log("Salary: " + salary);
let totalExpenses: number = 0;
for (let i = 1; i < input.length; i++) {
    const expense: number = Number(input[i]);
    totalExpenses += expense;
}
const remainingBudget: number = salary - totalExpenses;
console.log("Remaining budget: $" + remainingBudget.toFixed(2));