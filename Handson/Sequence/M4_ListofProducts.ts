import promptSync from "prompt-sync";
const prompt = promptSync();

let product: string = prompt("Enter a list of products comma seperated: ");
let product_list: string[] = product.split(",");

    console.log("List of Products:");

    for (let product of product_list) {
        console.log(product.trim());
    }