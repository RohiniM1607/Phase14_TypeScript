import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the birthdate (YYYY-MM-DD): ", (birthday: string) => {
    let birthDate = new Date(birthday);
    let today = new Date();
    let age: number = today.getFullYear() - birthDate.getFullYear();

    if (today.getMonth() < birthDate.getMonth() ||(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }

    console.log("Age: " + age);
    rl.close();
});