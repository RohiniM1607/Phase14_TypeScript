function sum(a: number, ...b:number[]): number{
    let result = a;
    for(var i=0; i<b.length; i++){
        result += b[i];
    }
    return result;
}
console.log(sum(3,5));
console.log(sum(1,3,5,7));
