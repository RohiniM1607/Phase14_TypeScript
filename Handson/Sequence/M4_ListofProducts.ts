import * as fs from "fs";
const lines = fs.readFileSync("Input.txt", "utf8").split(/\r?\n/);

let product: string = lines[8];
console.log("Products: "+product);
let product_list: string[] = product.split(",");

    console.log("List of Products:");

    for (let product of product_list) {
        console.log(product.trim());
    }