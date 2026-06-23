import promptSync from "prompt-sync";
const prompt = promptSync();

let rating: number = prompt("Average Rating: ");
let rounded: number = Math.round(rating);
console.log("Rounded Rating: "+rounded);
