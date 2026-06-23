import promptSync from "prompt-sync";
const prompt = promptSync();

let score: number = prompt("Game score: ");
console.log("Your score is "+score);