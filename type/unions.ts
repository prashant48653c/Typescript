
//void means the function doesn't return anything
function printCode(code:string | number):void{
    console.log(`The code is ${code}`)
}
printCode(404)

function multiply(num1:number,num2:number):number{
    return num1 * num2
}
multiply(33,55)

let num:unknown="34343";
console.log((num as number))