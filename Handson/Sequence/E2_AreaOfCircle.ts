import promptSync from "prompt-sync";
const prompt = promptSync();

let radius: number = Number(prompt("Enter the radius: "));
let area: number = 3.14 * radius * radius;
console.log("The area of the circle with radius "+radius+" is "+area);
