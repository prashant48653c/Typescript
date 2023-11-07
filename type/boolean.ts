
 
let isEven:boolean=false
function calculate(a:number){
    if(a % 2 === 0){
        isEven=true
    }
    return isEven
}
calculate(44)
console.log(`the number is even.${isEven}`)