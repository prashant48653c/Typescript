"use strict";
// @ts-ignore
const fullName = "Prashant Acharya";
const fName = fullName.substring(0, 8);
console.log(fName);
let hisName = "Sita";
let herName = "Sita";
const totalName = herName + hisName;
console.log(hisName.length);
console.log(totalName);
let isSame = false;
if (hisName === herName) {
    isSame = true;
}
console.log(isSame);
const final = `The name ${hisName} and ${herName} is ${isSame}`;
console.log(final);
const upper = final.toUpperCase();
console.log(upper);
