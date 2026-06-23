import promptSync from "prompt-sync";

const prompt = promptSync();

let income: number = Number(prompt("Enter your monthly income: "));
let expensesInput: string = prompt("Enter your expenses (space-separated): ");
let expenses: string[] = expensesInput.split(" ");
let totalExpenses: number = 0;
for (let expense of expenses) {
    totalExpenses += Number(expense);
}
let remainingBudget: number = income - totalExpenses;
console.log("Remaining budget: $" + remainingBudget.toFixed(2));