// Tuples are the array with fixed size and fixed type of element within them.
// readonly property doesn't allow the array to be edited or access
const myTuples:readonly [string,number,boolean]=["Hello",34,true];
 


// type aliase means type schoolname=string and interface is only for an object but you can extend the interface with extend
 interface student {
    name:string,
    age:number
 }
 interface goodStudent extends student {
    mark:number,
    position:string
 }

const goodStudents:goodStudent={
    name:"suman",
    age:4,
    mark:99,
    position:"second"
}

 type schoolName=string;
 let school:schoolName="Kalika"
 const students:student={
    name:"Prashant",
    age:17
 }
 console.log(myTuples)