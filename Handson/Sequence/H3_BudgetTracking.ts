import * as fs from "fs";

const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

// Read the second line
const parts = lines[13].split("|");

const salary: number = Number(parts[0].trim());
console.log("Salary: " + salary);

const expenses: number[] = parts[1].trim().split(" ").map(Number);
console.log("Expenses: " + expenses.join(", "));

let totalExpenses: number = 0;

for (let expense of expenses) {
    totalExpenses += expense;
}

const remainingBudget: number = salary - totalExpenses;

console.log("Remaining budget: $" + remainingBudget.toFixed(2));