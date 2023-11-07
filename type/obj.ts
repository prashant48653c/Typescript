const student:{
    stdName:string,
    age:number,
    class:number,
    schools:{
        primarySchool:string,
        currentSchool:string
    }
}={
    stdName:"prashant",
    age:16,
    class:12,
    schools:{
        primarySchool:"BPS",
        currentSchool:"KMMGS"
    }
}
console.log(student.age)

// custom type annotation 
type Student={
    name:string,
    age:number
}
const stdObj:Student={
    name:"prasu",
    age:33
}
console.log(stdObj.name)