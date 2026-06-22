let fruits: string[] = ['Apple', 'Orange', 'Mango'];
console.log("Direct access")
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log("For loop iterate")
for(var index in fruits)
    console.log(fruits[index]);
console.log("For loop iterate with length")
for(var i=0; i<fruits.length; i++)
    console.log(fruits[i])