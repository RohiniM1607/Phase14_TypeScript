import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the weight ", (weight: string) => {
    rl.question("Enter the height: ", (height: string) => {
        let w: number = Number(weight);
        let h: number = Number(height);
        let bmi: number= (w)/(h * h);
        console.log("BMI: "+bmi);
        rl.close();
    })
    
});
