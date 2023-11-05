 

const fullName:string="Prashant Acharya";
const fName:string=fullName.substring(0,8);
console.log(fName);

let hisName:string="Sita"
let herName:string="Sita"
const totalName:string=herName + hisName
console.log(hisName.length)
console.log(totalName)
let isSame:boolean=false
if(hisName === herName){
    isSame=true
}
console.log(isSame)

const final:string=`The name ${hisName} and ${herName} is ${isSame}`
console.log(final)

const upper:string=final.toUpperCase()
console.log(upper)